const express = require ('express');

const app = express();  //server create ho jata hai 


app.get('/Home', (req, res) => {
    res.send('welcome to Home page')
})

app.get('/About', (req, res) => {
    res.send('welcome to About page')
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})