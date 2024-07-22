const express = require('express');

const router = express.Router();

module.exports = (db) => {
  const { speakersModel } = db;

  router.get('/', async (req, res, next) => {
    try {
      const speakers = await speakersModel.getList();
      const context = {
        pageTitle: 'Speakers',
        name: 'Roux Meetups',
        template: 'speakers',
        speakers,
      };
      return res.render('layouts/base', context);
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:shortname', async (req, res, next) => {
    try {
      const speaker = await speakersModel.getSpeaker(req.params.shortname);
      console.log(speaker);
      const context = {
        pageTitle: 'Speaker Detail',
        name: 'Roux Meetups',
        template: 'speaker-detail',
        speaker,
      };
      return res.render('layouts/base', context);
    } catch (err) {
      return next(err);
    }
  });

  // Register the unhandled route middleware
  function handleUnhandledRoutes(req, res, next) {
    // res.status(404).send('Page not found');
    return next(new Error('The Route does not Exist!'));
  }
  router.use(handleUnhandledRoutes);

  return router;
};
