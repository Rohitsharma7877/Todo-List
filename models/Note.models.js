const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    title:String,
    note:String,
    category:String,
    priorities:String,
    duedate:String,
    userID:String
    
})
const NoteModel=mongoose.model("notes", noteSchema)
module.exports={NoteModel}