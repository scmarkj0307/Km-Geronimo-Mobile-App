const accountSid = 'ACd2273c63ca1ff66042850ae58c590198';
const authToken = 'f9bcfc886220e8cb1d94b0772348a457';
const serviceId = 'VAc64136e85189e3969466abdb68922f26';
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) =>
  res.send('Welcome to Verification service!'),
);

app.get('/verify/:to', async (req, res) => {
  const to = req.params.to;

  client.verify
    .services(serviceId)
    .verifications.create({ to, channel: 'sms' })
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
  client.verify
    .services(serviceId)
    .verificationChecks.create({ to, code })
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
