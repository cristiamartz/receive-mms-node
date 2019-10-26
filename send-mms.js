const  config  =  require ( ' ./config ' );
const  Twilio  =  require ( ' twilio ' );

const { twilioAccountSid , twilioAuthToken , twilioPhoneNumber } = config;
 cliente  const =  nuevo  Twilio (twilioAccountSid, twilioAuthToken);

cliente . mensajes . crear ({
  a : twilioPhoneNumber,
  de : twilioPhoneNumber,
  cuerpo :  '¿ Esta es la nave que hizo el Kessel Run en catorce parsecs? ' ,
  mediaUrl :  ' https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg ' ,
})
. hecho ();
