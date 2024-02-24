import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import

import userRouter from './routes/user.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';
import videoRouter from './routes/video.routes.js';
import commentRouter from './routes/comment.routes.js';
import likeRouter from './routes/like.routes.js';
// Tweet controller not completed, & subscription controller not added, playlist controller is a copy of like controller
// import tweetRouter from './routes/tweet.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter )
app.use("/api/v1/dashboard", dashboardRouter )
app.use("/api/v1/video", videoRouter )
app.use("/api/v1/comment", commentRouter )
app.use("/api/v1/like", likeRouter )

//http://localhost:8000/api/v1/users/registers


export {app};