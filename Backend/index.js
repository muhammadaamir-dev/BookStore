import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import bookroute from'./route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'
 const app=express()
const port =process.env.PORT|| 3000
const DB_Connection=process.env.MongoDB_URI

try {
    mongoose.connect(DB_Connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
app.use(cors())
 app.use(express.json());
app.use("/book", bookroute);
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server is running... on port ${port}`)
})