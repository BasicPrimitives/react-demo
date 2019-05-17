import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import util from 'util';

async function getMarkdownFiles() {
  const readdir = util.promisify(fs.readdir);
  const files = (await readdir(path.join(__dirname, '..', '..', 'static', 'samples')))
    .filter(fileName => fileName.endsWith('.md'))
    .reduce((files, fileName) => {
      files[fileName.substr(0, fileName.length - 3).toLowerCase()] = path.join(__dirname, '..', '..', 'static', 'samples', fileName);
      return files;
    }, {});

  return files;
}

async function getMarkdownFileContent(name) {
  const readFile = util.promisify(fs.readFile);
  let result = `# File ${name} not found`;
  const files = await getMarkdownFiles();
  const fileName = files[name] || path.join(__dirname, '..', '..', 'static', 'readme.md');
  if (fileName != null) {
    result = (await readFile(fileName)).toString();
  }
  return result;
}

export async function getSampleFileContent(link) {
  const readFile = util.promisify(fs.readFile);
  let fileContent = (await readFile(path.join(__dirname, '..', '..', 'static', 'samples', `${link}`))).toString();
  // remove BOM mark from file
  if (fileContent.charCodeAt(0) === 0xfeff) {
    fileContent = fileContent.substr(1);
  }
  // remove SSI command used for package primary library development.
  fileContent = fileContent.replace(/<!-- # include file="\.\.\/\.\.\/src\.primitives\/src\.primitives\.html"-->/g, match => '');
  fileContent = fileContent.replace(/(\.\.\/\.\.\/packages)/g, match => '/packages');
  fileContent = fileContent.replace(/(\.\.\/\.\.\/min)/g, match => '/min');
  fileContent = fileContent.replace(/(\.\.\/images\/photos)/g, match => '/photos');
  return fileContent;
}

function getStaticUrl(url) {
  return `/api/get-sample?name=${url}`;
}

export async function loadMarkdown(name) {
  const groups = {};
  let index = 0;
  const fileContent = await getMarkdownFileContent(name);
  const markdown = fileContent.replace(/(\[[\w ]+?\]\([\s\S]+?\)\s*)+/g, match => {
    index += 1;
    const samples = [];
    match = match.replace(/\[([\w ]+?)\]\(([\s\S]+?)\)/g, (str, caption, url) => {
      if (url.endsWith('.html') && !url.startsWith('http')) {
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

  // resolve promises
  for (let group in groups) {
    let samples = groups[group];
    for (let index = 0; index < samples.length; index += 1) {
      samples[index].content = await samples[index].content;
    }
  }
  return {
    markdown,
    groups
  }
}

export default { loadMarkdown, getSampleFileContent }