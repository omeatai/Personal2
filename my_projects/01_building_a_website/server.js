const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const createError = require('http-errors');

const FeedbackModel = require('./models/FeedbackModel');
const SpeakerModel = require('./models/SpeakerModel');

const feedbackModel = new FeedbackModel('./data/feedback.json');
const speakersModel = new SpeakerModel('./data/speakers.json');

const routes = require('./routes/homeRoutes');

const app = express();

const PORT = 3000;

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['key14842784278', 'key232423423424'],
  })
);

app.locals.siteName = 'Global ROUX Meetups';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use(async (req, res, next) => {
  res.locals.newGreeting = 'Hello World';

  try {
    const names = await speakersModel.getNames();
    res.locals.speakersNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use('/', routes({ feedbackModel, speakersModel }));

// createError middleware
app.use((req, res, next) => {
  // console.error(err.stack);
  // res.status(404).send('Page not Found!');
  return next(createError(404, 'Page not found'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.locals.message = err.message || 'The page you requested was not found.';
  const status = err.status || 500;
  res.locals.status = status;
  return res.status(status).render('404');
});

app.listen(PORT, () => {
  try {
    console.log(`Server running on port ${PORT}`);
    console.log('Ctrl + C to stop');
  } catch (err) {
    console.error(err.stack);
    throw new Error(`Something broke: ${err}`);
  }
});
