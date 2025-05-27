import express from "express";   //for type module
// const express = require("express") //for type common.js

import notesRoutes from "./routes/notesRoutes.js";
import {connectDb} from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middlewares/rateLimiter.js"

const app = express();
dotenv.config();
// console.log(process.env.MONGO_URI);

app.use(express.json()) //without it you will not able to access json data from database.


const PORT = process.env.PORT || 5001;


app.use((req,res,next)=>{
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
    next()
})
app.use(rateLimiter)
app.use("/api/notes", notesRoutes);

connectDb().then(() => {
  app.listen(PORT,()=>{
    console.log(`Server is connected at port no. ${PORT}`)
  })
});


//
