const express = require('express');
const format = require('date-format');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

const options = {
  explorer: true,
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.get('/', (_req, res) => {
  res.status(200).send('<h1>Welcome to Social App</h1>');
});

app.get('/api/v1/instagram', (_req, res) => {
  const instagram = {
    username: 'shubhampurwar05',
    followers: 50,
    following: 100,
    date: format('yyyy-MM-dd hh:mm:ss', new Date()),
  };

  res.status(200).json(instagram);
});

app.get('/api/v1/facebook', (_req, res) => {
  const facebook = {
    username: 'shubhampurwar97',
    friends: 50,
    following: 30,
    date: format('yyyy-MM-dd hh:mm:ss', new Date()),
  };

  res.status(200).json(facebook);
});

app.get('/api/v1/linkedin', (_req, res) => {
  const linkedin = {
    username: 'shubhamdev_97',
    followers: 50,
    following: 40,
    connections: 100,
    date: format('yyyy-MM-dd hh:mm:ss', new Date()),
  };

  res.status(200).json(linkedin);
});

app.get('/api/v1/:token', (req, res) => {
  const token = req.params.token;

  res.status(400).json({
    token,
    message: `${token} is not a valid path`,
  });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
