const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const util = require('util');

const folders = [
  {
    name: 'javascript',
    path: path.join(__dirname, '..', '..', 'static', 'javascript', 'samples')
  },
  {
    name: 'react',
    path: path.join(__dirname, '..', '..', 'static', 'react', 'docs')
  },
  {
    name: 'info',
    path: path.join(__dirname, '..', '..', 'static')
  },
  {
    name: 'reference',
    path: path.join(__dirname, '..', '..', 'static', 'javascript', 'apireference')
  },
  {
    name: 'packageinfo',
    path: path.join(__dirname, '..', '..', 'static', 'javascript')
  }
];

async function getMarkdownFiles() {
  const readdir = util.promisify(fs.readdir);
  let files = {};
  for (let index = 0; index < folders.length; index += 1) {
    const { name: folderName, path: folderPath } = folders[index];
    if (fs.existsSync(folderPath)) {
      files = (await readdir(folderPath))
        .filter(fileName => fileName.endsWith('.md'))
        .reduce((files, fileName) => {
          const fileKey = `${folderName}-${fileName.substr(0, fileName.length - 3).toLowerCase()}`;
          files[fileKey] = path.join(folderPath, fileName);
          return files;
        }, files);
    }
  }
  return files;
}

async function getMarkdownFileContent(name) {
  const readFile = util.promisify(fs.readFile);
  let result = `# File ${name} not found`;
  const files = await getMarkdownFiles();
  const filePath = files[name] || path.join(__dirname, '..', '..', 'static', 'readme.md');
  if (filePath != null) {
    fileContent = (await readFile(filePath)).toString();
    fileContent = fileContent.replace(/(samples\/images)/g, match => 'api/images');    
  }
  return fileContent;
}

async function getSampleFileContent(link) {
  const readFile = util.promisify(fs.readFile);
  let filePath = '';
  if (link.endsWith('.js')) {
    filePath = path.join(__dirname, '..', '..', 'static', 'react', 'docs', `${link}`);
  } else {
    filePath = path.join(__dirname, '..', '..', 'static', 'javascript', 'samples', `${link}`);
  }
  let fileContent = (await readFile(filePath)).toString();
  // remove BOM mark from file
  if (fileContent.charCodeAt(0) === 0xfeff) {
    fileContent = fileContent.substr(1);
  }
  // remove SSI command used for package primary library development.
  fileContent = fileContent.replace(/<!-- # include file="\.\.\/\.\.\/src\.primitives\/src\.primitives\.html"-->/g, match => '');
  fileContent = fileContent.replace(/(\.\.\/\.\.\/packages)/g, match => '/packages');
  fileContent = fileContent.replace(/(\.\.\/\.\.\/min)/g, match => '/min');
  fileContent = fileContent.replace(/(\.\.\/images\/photos)/g, match => '/images/photos');
  fileContent = fileContent.replace(/(\'photos)/g, match => '\'/photos');
  fileContent = fileContent.replace(/(\"photos)/g, match => '\"/photos');
  fileContent = fileContent.replace(/(\(\.\/images)/g, match => '/images');
  fileContent = fileContent.replace(/(\&nbsp\;)/g, match => ' ');
  fileContent = fileContent.replace(/(\/react\/photos)/g, match => '/api/images/photos');
  return fileContent;
}

function getStaticUrl(url) {
  return `/api/get-sample?name=${url}`;
}

async function loadMarkdown(name) {
  const groups = {};
  let index = 0;
  const fileContent = await getMarkdownFileContent(name);
  const markdown = fileContent.replace(/(\!?\[[\w ]+?\]\([\s\S]+?\)\s*)+/g, match => {
    index += 1;
    const samples = [];
    match = match.replace(/(\!?)\[([\w ]+?)\]\(([\s\S]+?)\)/g, (str, sign, caption, url) => {
      if (sign == "") {
        if ((url.endsWith('.html') && !url.startsWith('http')) || url.endsWith('.js')) {
          samples.push({
            caption,
            url: getStaticUrl(url),
            content: getSampleFileContent(url)
          });
        }
        if (!url.startsWith('http')) {
          url = `/${url}`;
        }
        return `[${caption}](${url})\n`;
      } else {
        if (caption == "Screenshot") {
          return '';
        }
        if (!url.startsWith('http')) {
          url = `/${url}`;
        }
        return `![${caption}](${url})\n`;
      }
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

module.exports = { loadMarkdown, getSampleFileContent };