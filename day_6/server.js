require("dotenv").config();
const express = require ("express")
const ConnectToDB = require ('./src/db/db')
//const NoteModel = require ('./src/models/note.model');
const noteModel = require("./src/models/note.model");


ConnectToDB()

const app = express();    //server created

app.use (express.json())


app.post('/notes', async (req,res) => {
    const {title,content} = req.body ;
    console.log(title,content)


    await noteModel.create ({
        title,content 
    })

    res.json({
        message:"note created successfully"
    })
})


app.get('/notes', async(req,res) => {
    const notes = await noteModel.find()
    res.json({
        message:"message fetch successfully ",
        notes
    })
})

app.delete('/notes/:id',async(req,res)=>{
    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id : noteId
    })
     res.json ({
        message : "note deleted successfully"
     })
})


app.patch('/notes/:id', async(req,res) => {
    const noteId= req.params.id
    const {title} = req.body

    await noteModel.findOneAndUpdate({
        _id : noteId
        },
        {
          title : title 
    })
    res.json({
        message:"Note updated"
    })
})




app.listen(3000,() => {
    console.log("server is running on port 3000");    //run server 
    
})