const express = require('express');

const speakersRoutes = require('./speakersRoutes');
const feedbackRoutes = require('./feedbackRoutes');

const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    const context = {
      pageTitle: 'Welcome',
      name: 'Roux Meetups',
    };
    res.render('pages/index', context);
  });

  router.use('/speakers', speakersRoutes(db));
  router.use('/feedback', feedbackRoutes(db));

  return router;
};
