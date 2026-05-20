const express = require('express');

const app = express();   //server created 
let notes = [];  // to store the notes in memory (array) 
// jitne bhi variables hum create karte hai uski value RAM mein store hoti hai so as we restart the server it will be NULL , 
// so that we use database for storage purpose(it is like storing data to the hard disk ) 

app.use(express.json());  // to parse JSON data sent by the client in the request body (middleware)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});



/* notes --> title , description */  // to add a note --> POST /notes
//  // to get all notes --> GET /notes(show all the notes stored in the notes array)

app.post('/notes', (req, res) => {
    console.log(req.body);  // to see the data sent by the client in the request body
    notes.push(req.body);  // to add the note sent by the client to the notes array
    res.json({ message: 'Note added successfully' });  // to send a success message as a JSON response to the client
})

app.get('/notes', (req, res) => {
    res.json(notes);  // to send the notes array as a JSON response to the client
})


/* to delete a note --> DELETE /notes/:index (where :index is the index of the note to be deleted in the notes array)
*/
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;  // to get the index of the note to be deleted from the request parameters)
    delete notes[index];  // to delete the note at the specified index from the notes array
    res.json({ message: 'Note deleted successfully' });
})

/* to update a note --> PATCH /notes/:index (where :index is the index of the note to be updated in the notes array) */
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index; // to get the index of the note to be updated from the request parameters
    const {title} = req.body;  // to get the new title of the note from the request body

    notes[index].title = title;  // to update the title of the note at the specified index in the notes array
    res.json({ message: 'Note updated successfully' });  // to send a success message as a JSON response to the client
})

// to send a success message as a JSON response to the client

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})