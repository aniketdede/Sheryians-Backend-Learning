const express  = require('express')

const app = express();  //server created 


app.use(express.json()); //build in middleware to parse JSON request 

let notes = []; 




app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body); // Log the request body to the console
    res.json({ message: 'Note added successfully', 
              notes: notes }); // Send a response back to the client with the added note and the updated notes array
});



app.listen(3000,() =>{
    console.log("server is running on port 3000");
    
})

