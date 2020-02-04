const primitives = require('basicprimitives');
import Photos from './Photos';

const downloadDiagram = (config, fileName, caption, plugin) => {
  const PDFDocument = require('pdfkit-nodejs-webpack');
  const blobStream = require('blob-stream');
  const FileSaver = require('file-saver');

  let { items } = config;

  items = items.map(item => {
    var imageName = "a";
    if (item.image != null) {
      [, imageName] = item.image.match(/.*(.+?)\.png/m) || [];
    }
    return {
      ...item,
      image: Photos[imageName]
    }
  });

  const orgDiagramPlugin = plugin({
    ...config,
    items,
    cursorItem: null,
    hasSelectorCheckbox: primitives.common.Enabled.False,
    templates: {}
  });

  var diagramSize = orgDiagramPlugin.getSize();

  var doc = new PDFDocument({ size: [diagramSize.width + 100, diagramSize.height + 150] });
  var stream = doc.pipe(blobStream());

  doc.save();

  doc.fontSize(25)
    .text(caption, 50, 50);

  orgDiagramPlugin.draw(doc, 50, 100);

  doc.restore();

  doc.end();

  stream.on('finish', function () {
    var string = stream.toBlob('application/pdf');
    FileSaver.saveAs(string, fileName);
  });
};

const downloadOrgDiagram = (config, fileName, caption) => {
  downloadDiagram(config, fileName, caption, primitives.pdf.orgdiagram.Plugin);
}

const downloadFamDiagram = (config, fileName, caption) => {
  downloadDiagram(config, fileName, caption, primitives.pdf.famdiagram.Plugin);
}

export default {
  downloadOrgDiagram,
  downloadFamDiagram
};