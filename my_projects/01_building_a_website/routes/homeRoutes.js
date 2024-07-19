const express = require('express');

const speakersRoutes = require('./speakersRoutes');
const feedbackRoutes = require('./feedbackRoutes');

const router = express.Router();

module.exports = (db) => {
  const { speakersModel } = db;

  router.get('/', async (req, res) => {
    const topSpeakers = await speakersModel.getList();
    console.log(topSpeakers);

    const context = {
      pageTitle: 'Welcome',
      name: 'Roux Meetups',
      template: 'index',
      topSpeakers,
    };
    res.render('layouts/base', context);
  });

  router.use('/speakers', speakersRoutes(db));
  router.use('/feedback', feedbackRoutes(db));

  return router;
};
