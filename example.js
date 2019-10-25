var twilio  = require('twilio'),
    fs      = require('fs'),
    async   = require('async'),
    request = require('request');

app.post('/mms', function(req, res) {
    var options = { url: 'https://mayabot.herokuapp.com/twiml' };
    if (!twilio.validateExpressrequire(req, '3cc88d9f1db2595a964d8f1fda400c5a', options)) return res.status(401).send("Bad key!");

    if(!req.body.hasOwnProperty('MediaUrl')) return res.send("Missing media...");

    var media = req.body.MediaUrl;

    //download all media
    async.map(media, download, function(err, filenames) {

        var resp = new twilio.TwimlResponse();
        if(err) {
            resp.say("Problem occured");
            console.log(err);
        }
        else resp.say('Files recieved: ' + filenames.join(', '));
        res.type('text/xml');
        res.send(resp.toString());
    });
});

//download a single url to a unique filename
function download(url, cb) {
    var name = Date.now() + url.split('/').pop();

    request
        .get(url)
        .on('error', cb)
        .on('end', function() {
            cb(null, name);
        })
        .pipe(fs.createWriteStream(name));
}
shareedit
