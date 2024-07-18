const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    const context = {
      pageTitle: 'Welcome',
      name: 'Roux Meetups',
    };
    res.render('pages/index', context);
  });

  return router;
};
