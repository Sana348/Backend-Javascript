import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
})

connectDB()


// import express from "express"
// const app = express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//   app.on("error", (error)=>{
//     console.log("Error:", error)
// throw err;

//   })
//   app.listen(process.env.PORT, ()=>{
//     console.log(`Ap is lisetening to post${process.env.PORT}`)
//   })
// } catch (error) {
//     console.log("Error:", error);
//     throw err
//   }
// })();
