const express = require('express');

const router = express.Router();

module.exports = (db) => {
  const { feedbackModel } = db;

  router.get('/', async (req, res, next) => {
    try {
      const feedback = await feedbackModel.getList();
      return res.json({ data: feedback });
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', (req, res, next) => {
    try {
      const feedback = req.body.feedback;
      if (!feedback) {
        return res.send('You must provide feedback.');
      }
      return res.send(`Thanks for your posted feedback: ${feedback}`);
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
