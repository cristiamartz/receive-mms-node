
//  TWILIO_ACCOUNT_SID='ACfe3b3e808ada63cdf70719edcce47688';
//  TWILIO_AUTH_TOKEN='3cc88d9f1db2595a964d8f1fda400c5a';
//  TWILIO_NUMBER=+14155238886


const cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// constiables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.


cfg.twilioAccountSid = process.env.TWILIO_ACCOUNT_SID='ACfe3b3e808ada63cdf70719edcce47688';
cfg.twilioAuthToken = process.env.TWILIO_AUTH_TOKEN='3cc88d9f1db2595a964d8f1fda400c5a';

// A Twilio number you control - choose one from:
// Specify in E.164 format, e.g. "+16519998877"
cfg.twilioPhoneNumber = process.env.TWILIO_NUMBER=+14155238886;

// Export configuration object
module.exports = cfg;
