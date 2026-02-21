import dotenv from "dotenv";
import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import userRouter from "./src/modules/user/user.routes.js";
import authRouter from "./src/modules/auth/auth.routes.js";
import appointmentRouter from "./src/modules/appointment/appointment.routes.js";
import doctorRouter from "./src/modules/doctor/doctor.routes.js";
import { errorHandler } from "./src/config/middlewares/error.middleware.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieparser());
//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/doctor", doctorRouter);

//error
app.use(errorHandler);

export default app;
