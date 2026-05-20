const express = require('express');

const app = express();   //server created

//home route
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});


//about route
app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});


app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });   