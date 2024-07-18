const express = require('express');

const router = express.Router();

module.exports = (db) => {
  const { speakersModel } = db;

  router.get('/', async (req, res) => {
    const speakers = await speakersModel.getList();
    return res.json({ data: speakers });
  });

  router.get('/:shortname', (req, res) => {
    const speakerName = req.params.shortname;
    return res.send(`This is the Speakers Detail Page for speaker: ${speakerName}.`);
  });

  return router;
};
