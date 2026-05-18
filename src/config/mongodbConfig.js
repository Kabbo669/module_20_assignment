import mongoose from "mongoose";

 
const mongodbConfig =async ()=>{
  try{
    mongoose.set('strictQuery', true)

    const USERNAME = process.env.DATABASE_USERNAME;
    const DATABASE_NAME = process.env.DATABASE_NAME;
    const PASSWORD = process.env.DATABASE_PASSWORD;

   await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jajq82x.mongodb.net/Express-Mongo-Practice?appName=Cluster0`,{
      autoIndex: process.env.NODE_ENV !== "production",
      serverSelectionTimeoutMS:5000,
   });
   console.log('Connected to the database successfully');
  }catch(error){
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}

export default mongodbConfig