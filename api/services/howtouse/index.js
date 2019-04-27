import _ from 'lodash';
import express from 'express';
import path from 'path';
import fs from 'fs';
import cache from 'memory-cache';
import uuid from 'uuid';

function getMarkdownFiles() {
  var files = fs.readdirSync(path.join(__dirname, '..', '..', 'static', 'samples'))
    .filter(fileName => fileName.endsWith('.md'))
    .reduce((files, fileName) => {
      files[fileName.substr(0, fileName.length - 3).toLowerCase()] = path.join(__dirname, '..', '..', 'static', 'samples', fileName);
      return files;
    }, {});

  return files;
}

function getMarkdownFileContent(name) {
  let result = `# File ${name} not found`;
  const files = getMarkdownFiles();
  const fileName = files[name] || path.join(__dirname, '..', '..', 'static', 'readme.md');
  if (fileName != null) {
    result = fs.readFileSync(fileName).toString();
  }
  return result;
};

function getSampleFileContent(link) {
  let fileContent = fs.readFileSync(path.join(__dirname, '..', '..', 'static', 'samples', `${link}`)).toString();
  // remove BOM mark from file
  if (fileContent.charCodeAt(0) === 0xFEFF) {
    fileContent = fileContent.substr(1);
  }
  // remove SSI command used for package primary library development.
  fileContent = fileContent.replace(/<!-- # include file="\.\.\/\.\.\/src\.primitives\/src\.primitives\.html"-->/g, (match) => {
    return '';
  });
  fileContent = fileContent.replace(/(\.\.\/\.\.\/packages)/g, (match) => {
    return '/packages';
  });
  fileContent = fileContent.replace(/(\.\.\/\.\.\/min)/g, (match) => {
    return '/min';
  });
  fileContent = fileContent.replace(/(\.\.\/images\/photos)/g, (match) => {
    return '/photos';
  });
  return fileContent;
};

function getStaticUrl(url) {
  return `/api/get-sample?name=${url}`;
}

export default function customService(app) {
  app.use(express.static(path.join(__dirname, '..', '..', 'static')));

  app.use('/load-markdown', (req, res) => {
    const groups = {};
    let index = 0;
    let fileContent = getMarkdownFileContent(req.query.name);
    const markdown = fileContent.replace(/(\[[\w ]+?\]\([\s\S]+?\)\s*)+/g, (match) => {
      index += 1;
      const samples = [];
      match = match.replace(/\[([\w ]+?)\]\(([\s\S]+?)\)/g, (str, caption, url) => {
        if (url.endsWith('.html')) {
          samples.push({
            caption,
            url: getStaticUrl(url),
            content: getSampleFileContent(url)
          });
        }
        return `[${caption}](/${url})\n`;
      });
      if (samples.length > 0) {
        const groupName = `group${index}`;
        groups[groupName] = samples;
        return `[group](${groupName})\n`;
      }
      return match;
    });
    return res.json({
      markdown,
      groups
    });
  });

  app.use('/get-sample', (req, res) => {
    let fileContent = getSampleFileContent(req.query.name);
    return res.send(fileContent);
  });

  app.use('/get-saved-sample', (req, res) => {
    let fileContent = cache.get(req.query.name);
    if (fileContent == null) {
      fileContent = '<p>Sample expired in cache. Click Try button again.</p>';
    }
    return res.send(fileContent);
  });

  app.use('/save-code', (req, res) => {
    const id = uuid.v1();
    cache.put(id, req.body.content, 30000);
    return res.json({
      url: `/api/get-saved-sample?name=${id}`
    });
  });
}
