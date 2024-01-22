import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // Assuming you have an 'app' variable defined somewhere in your code
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

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
