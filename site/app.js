const express = require('express');
const app = express();

app.use(express.static('public'));

//Las rutas:

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/resume', (req, res) => {
    res.sendFile(__dirname + '/views/resume.html');
})

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/views/create.html');
})

app.get('/send', (req, res) => {
    res.sendFile(__dirname + '/views/send.html');
})

app.get('/end', (req, res) => {
    res.sendFile(__dirname + '/views/end.html');
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
})