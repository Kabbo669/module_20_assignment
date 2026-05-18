import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongodbConfig from "./src/config/mongodbConfig.js";


const port = process.env.PORT || 3000;

const startServer = async()=>{
  try{
    await mongodbConfig();

    app.listen(port,()=>{
      console.log(`Server is running on port ${port}`)
    })
  }catch(error){
    console.error("Error starting the server:", error);
  }
}

startServer();