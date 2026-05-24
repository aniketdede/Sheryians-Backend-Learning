const mongoose = require ("mongoose")


// title, content 
    
    //model is used to perform crud operations , beacuse it make it easy    
    //model is wrapper for the scehma 
/* string 
   boolen 
   Number */

const NoteSchema = new mongoose.Schema ({
    title : String ,
    content : String 
})

const noteModel = mongoose.model ("note",NoteSchema)


module.exports = noteModel 