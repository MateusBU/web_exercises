//backend
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

//print what come in the body, when the button is clicked
//and send Congrats
app.post('/users', (req, resp, next) =>{
    console.log(req.body);
    resp.send('<h1>Congrats. Included user</h1>');
});

app.post('/users/:id', (req, resp, next) =>{
    console.log(req.params.id);
    console.log(req.body);
    resp.send(`<h1>Congrats. Altered user ${req.body.nameUser}</h1>`);
});

app.listen(3003)