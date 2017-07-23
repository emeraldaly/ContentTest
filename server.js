const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contentful = require('contentful');
const util = require('util');
const React = require('react');
const ReactDOM = require('react-dom');


const PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
    //res.send('Hello World!');
    const client = contentful.createClient({
        space: 'e8twzq3qt6l9',
        accessToken: 'a9ab23eb59524223dd8920cfa9b047984d66612bf4c9485f434ac75e2013aab7'
    })

    client.getEntry('1asN98Ph3mUiCYIYiiqwko')
        .then((entry) => res.send(entry))
})
module.exports = app.listen(PORT, function(){
    console.log("listening on PORT:" + PORT);
});


