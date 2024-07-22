const express = require('express');

const speakersRoutes = require('./speakersRoutes');
const feedbackRoutes = require('./feedbackRoutes');

const router = express.Router();

module.exports = (db) => {
  const { speakersModel } = db;

  router.get('/', async (req, res, next) => {
    // return next(new Error('some Error'));
    try {
      const topSpeakers = await speakersModel.getList();
      const context = {
        pageTitle: 'Welcome',
        name: 'Roux Meetups',
        template: 'index',
        topSpeakers,
      };
      return res.render('layouts/base', context);
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoutes(db));
  router.use('/feedback', feedbackRoutes(db));

  // Register the unhandled route middleware
  function handleUnhandledRoutes(req, res, next) {
    // res.status(404).send('Page not found');
    return next(new Error('The Route does not Exist!'));
  }
  router.use(handleUnhandledRoutes);

  return router;
};
