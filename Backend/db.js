import mongoose from "mongoose";
import dotenv from'dotenv'
dotenv.config()
export const connectDB=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("Database Connected ");
    } catch (error) {
        console.log(`Database Connection Error  ${error}`)
    }

}