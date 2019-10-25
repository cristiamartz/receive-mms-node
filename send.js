const accountSid = 'ACfe3b3e808ada63cdf70719edcce47688';
const authToken = '3cc88d9f1db2595a964d8f1fda400c5a';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
     from: 'whatsapp:+14155238886',
     body: `It's taco time!`,
     to: 'whatsapp:+573173310654'
   })
  .then(message => console.log(message.sid));

  