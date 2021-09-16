import express from "express";
import { userRouter } from "./Routes/userRoutes";
import { messageRouter } from "./Routes/messageRoutes";
export const app = express();

app.use('/users', userRouter)
app.use('/messages', messageRouter)
