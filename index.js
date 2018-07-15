console.log('index.js is running.');
const express = require('express');
const headerinfo = require('./headerinfo');
const hbs = require('hbs');
const app = express();
hbs.registerPartials(__dirname+'/partials');
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
app.get('/test',(req, res)=>{
res.send('hello world');
});

app.get('/', (req,res)=>{
    res.render('index', headerinfo.elements());
});

app.listen(8080,()=>{
console.log('server running at 8080')
});