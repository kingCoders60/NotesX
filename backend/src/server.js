// import express from "express"; //for type module
// // const express = require("express") //for type common.js

// import notesRoutes from "./routes/notesRoutes.js";
// import cors from "cors";


// import { connectDb } from "./config/db.js";
// import dotenv from "dotenv";
// import rateLimiter from "./middlewares/rateLimiter.js";

// const app = express();
// dotenv.config();
// // console.log(process.env.MONGO_URI);
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
// app.use(express.json()); //without it you will not able to access json data from database.
// app.use()

// const PORT = process.env.PORT || 5001;

// // app.use((req,res,next)=>{
// //     console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
// //     next();
// // })

// app.use("/api/notes", notesRoutes);
// app.use(rateLimiter);
// app.use(cors);

// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is connected at port no: ${PORT}`);
//   });
// });
// //


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json()); 
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
// this middleware will parse JSON bodies: req.body
// app.use(rateLimiter);



// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });
app.use("/api/notes", notesRoutes);
app.use(rateLimiter);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});