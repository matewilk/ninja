var express = require('express');
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    send = require('./sendwithmailer');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// Used for production build
app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(__dirname + '/views'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.post('/api/send', function(req, res) {
    send(req.body, function(info){
        res.end(JSON.stringify({success: true}, null, 2));
    });
});

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function(){
    console.log('Server listening on port: ' + PORT);
});
