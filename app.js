const express = require('express')
const app = express();
const port = 3000;

//middleware
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
});


app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get("*", (req,res) => {
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`port listing on ${port}`);
})