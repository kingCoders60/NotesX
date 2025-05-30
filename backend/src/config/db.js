import mongoose from "mongoose"
export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected Successfully!!");
    }
    catch(error){
        console.log("Error connecting to MongoDb",error)
        process.exit(1);
    }
}