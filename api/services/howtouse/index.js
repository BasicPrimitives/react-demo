import _ from 'lodash';
import express from 'express';
import path from 'path';
import cache from 'memory-cache';
import uuid from 'uuid';
import {loadMarkdown, getSampleFileContent} from './markdown';

export default function customService(app) {
  app.use(express.static(path.join(__dirname, '..', '..', 'static')));

  app.use('/load-markdown', async (req, res, next) => {
    try {
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
    cache.put(id, req.body.content, 600000);
    return res.json({
      url: `/api/get-saved-sample?name=${id}`
    });
  });
}
