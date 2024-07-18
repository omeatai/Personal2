const express = require('express');
const path = require('path');

const FeedbackModel = require('./models/FeedbackModel');
const SpeakerModel = require('./models/SpeakerModel');

const feedbackModel = new FeedbackModel('./data/feedback.json');
const speakersModel = new SpeakerModel('./data/speakers.json');

const routes = require('./routes/homeRoutes');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({ feedbackModel, speakersModel }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Ctrl + C to stop');
});
