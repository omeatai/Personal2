const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const feedbackPOSTValidator = [
  check('name').trim().isLength({ min: 3 }).escape().withMessage('A name is required'),
  check('email').trim().isEmail().normalizeEmail().withMessage('A valid email address is required'),
  check('title').trim().isLength({ min: 3 }).escape().withMessage('A title is required'),
  check('message').trim().isLength({ min: 5 }).escape().withMessage('A message is required'),
];

module.exports = (db) => {
  const { feedbackModel } = db;

  router.get('/', async (req, res, next) => {
    try {
      const feedback = await feedbackModel.getList();

      const errors = req.session.feedback ? req.session.feedback.errors : false;
      const message = req.session.feedback ? req.session.feedback.message : false;
      req.session.feedback = {};

      const context = {
        pageTitle: 'Feedback',
        name: 'Roux Meetups',
        template: 'feedback',
        feedback,
        errors,
        message,
      };
      return res.render('layouts/base', context);
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', feedbackPOSTValidator, async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        req.session.feedback = {
          errors: errors.array(),
        };
        return res.redirect('/feedback');
      }

      const { name, email, title, message } = req.body;
      await feedbackModel.addEntry(name, email, title, message);
      req.session.feedback = {
        message: 'Thank you for your feedback!',
      };
      console.log(req.body);
      return res.redirect('/feedback');
    } catch (err) {
      return next(err);
    }
  });

  // API Endpoint for feedback
  router.post('/api', feedbackPOSTValidator, async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      }
      const { name, email, title, message } = req.body;
      await feedbackModel.addEntry(name, email, title, message);
      const feedback = await feedbackModel.getList();
      return res.json({ feedback, successMessage: 'Thank you for your feedback!' });
    } catch (err) {
      return next(err);
    }
  });

  // Register the unhandled route middleware
  function handleUnhandledRoutes(req, res, next) {
    return next(new Error('The Route does not Exist!'));
  }
  router.use(handleUnhandledRoutes);

  return router;
};
