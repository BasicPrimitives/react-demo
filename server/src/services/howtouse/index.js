const _ = require('lodash');
const express = require('express');
const path = require('path');
const cache = require('memory-cache');
const uuid = require('uuid');
const newrelic = require('newrelic');
const { loadMarkdown, getSampleFileContent } = require('./markdown');

module.exports = function customService(app) {
  app.use('/load-markdown', async (req, res, next) => {
    try {
      newrelic.addCustomAttributes({
        "markdown": req.query.name,
        "address": req.header('x-forwarded-for') || req.connection.remoteAddress,
        "folder": req.query.name.split('-')[0]
      });
      var markdown = await loadMarkdown(req.query.name);
      return res.json(markdown);
    } catch (e) {
      next(e)
    }
  });

  app.use('/get-sample', async (req, res) => {
    const fileContent = await getSampleFileContent(req.query.name);
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
    cache.put(id, req.body.content, 60000);
    return res.json({
      url: `/api/get-saved-sample?name=${id}`
    });
  });

  app.use('/images', express.static(path.join(__dirname, '..', '..', 'static', 'javascript', 'samples', 'images')));
  app.use('/images', express.static(path.join(__dirname, '..', '..', 'static', 'react', 'docs', 'images')));
  app.use('/javascript', express.static(path.join(__dirname, '..', '..', 'static', 'javascript')));
  app.use('/javascript', express.static(path.join(__dirname, '..', '..', 'static', 'javascript' , 'dist')));
  app.use('/javascript', express.static(path.join(__dirname, '..', '..', 'static', 'javascript')));
  app.use('/data', express.static(path.join(__dirname, '..', '..', 'static', 'javascript', 'samples', 'data')));
  app.use('/', express.static(path.join(__dirname, '..', '..', 'static')));
}
