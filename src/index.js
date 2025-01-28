import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import logger from "./service/logger.js";

const app = express();


const morganFormat = ":method :url :status :res[content-length] - :response-time ms"
app.use(morgan(
    morganFormat,{
        stream:{
            write: (message) => {
               const logObject = {
                method: message.split(" ")[0],
                url: message.split(" ")[1],
                status: message.split(" ")[2],
                contentLength: message.split(" ")[3],
                responseTime: message.split(" ")[3],

               };
               logger.info(Json.stringify(logObject))
            }
        }
    }
))


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())





export {app}