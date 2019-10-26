const config = require('./config');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken} = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

client.messages.create({
  to: 'whatsapp:+573173310654',
  from: 'whatsapp:+14155238886',
  body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  mediaUrl: 'https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg',
})
.done();
