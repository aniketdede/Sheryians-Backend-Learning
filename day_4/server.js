const express = require ('express');

const app = express();   //server created 



app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000 ,()=> {
    console.log("Server is running on port 3000");
})