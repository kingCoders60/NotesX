import mongoose from "mongoose"

//1-create schema
//2-create model

const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    }
},{timestamps:true});



const Note = mongoose.model("Note",noteSchema);

export default Note;


// const noteSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     content:{
//         type:String,
//         required:true
//     },
// },
// {timestamps:true})//created at and updated at field)

