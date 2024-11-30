const _ = require('lodash');
const express = require('express');
const path = require('path');
const cache = require('memory-cache');
const uuid = require('uuid');
const newrelic = require('newrelic');
const { loadMarkdown, getSampleFileContent } = require('./markdown');
const { URL } = require('url');

module.exports = function customService(folder, app) {
  app.use(`${folder}/load-markdown`, async (req, res, next) => {
    let gclid = null;
    if(req.headers.referer != null) {
      let url = new URL(req.headers.referer);
      gclid = url.searchParams.get("gclid");
    }
    try {
      newrelic.addCustomAttributes({
        "markdown": req.query.name,
        "address": req.header('x-forwarded-for') || req.connection.remoteAddress,
        "folder": req.query.name.split('-')[0],
        "gclid": gclid
      });
      var markdown = await loadMarkdown(req.query.name);
      return res.json(markdown);
    } catch (e) {
      next(e)
    }
  });

  app.use(`${folder}/get-sample`, async (req, res) => {
    const fileContent = await getSampleFileContent(req.query.name);
    return res.send(fileContent);
  });

  app.use(`${folder}/get-saved-sample`, (req, res) => {
    let fileContent = cache.get(req.query.name);
    if (fileContent == null) {
      fileContent = '<p>Sample expired in cache. Click Try button again.</p>';
    }
    return res.send(fileContent);
  });

  app.use(`${folder}/save-code`, (req, res) => {
    const id = uuid.v1();
    cache.put(id, req.body.content, 60000);
    return res.json({
      url: `/api/get-saved-sample?name=${id}`
    });
  });

  app.use(`${folder}/images`, express.static(path.join(__dirname, '..', '..', 'static', 'javascript', 'samples', 'images')));
  app.use(`${folder}/images`, express.static(path.join(__dirname, '..', '..', 'static', 'react', 'docs', 'images')));
  app.use(`${folder}/javascript`, express.static(path.join(__dirname, '..', '..', 'static', 'javascript')));
  app.use(`${folder}/javascript`, express.static(path.join(__dirname, '..', '..', 'static', 'javascript' , 'dist')));
  app.use(`${folder}/javascript`, express.static(path.join(__dirname, '..', '..', 'static', 'javascript')));
  app.use(`${folder}/data`, express.static(path.join(__dirname, '..', '..', 'static', 'javascript', 'samples', 'data')));
  app.use(`${folder}/`, express.static(path.join(__dirname, '..', '..', 'static')));
}
