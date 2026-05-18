import express from "express";
const app = express();
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import router from "./src/routes/index.js";
import * as errorHandler from "./src/middlewares/errorHandler.js"


app.use(cors())
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true, limit: "50mb"}))
app.use(cookieParser());
app.use(helmet());

app.use(router)

app.use(errorHandler.notFoundHandler)
app.use(errorHandler.errorHandler)

export default app;