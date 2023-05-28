const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

dotenv.config(); // Load environment variables from .env file

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const serviceId = process.env.SERVICE_ID;
const client = twilio(accountSid, authToken);

const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) =>
  res.send('Welcome to Verification service!')
);

app.get('/verify/:to', async (req, res) => {
  const to = req.params.to;

  client.verify.v2.services(serviceId)
    .verifications
    .create({ to, channel: 'sms' })
    .then((verification) => {
      res.json(verification);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/check/:to/:code', async (req, res) => {
  const to = req.params.to;
  const code = req.params.code;

  client.verify.v2.services(serviceId)
    .verificationChecks
    .create({ to, code })
    .then((verification) => {
      res.json(verification);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
