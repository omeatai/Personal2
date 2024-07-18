const express = require('express');

const router = express.Router();

module.exports = (db) => {
  const { feedbackModel } = db;

  router.get('/', async (req, res) => {
    const feedback = await feedbackModel.getList();
    return res.json({ data: feedback });
  });

  router.post('/', (req, res) => {
    const feedback = req.body.feedback;
    if (!feedback) {
      return res.send('You must provide feedback.');
    }
    return res.send(`Thanks for your posted feedback: ${feedback}`);
  });

  return router;
};
