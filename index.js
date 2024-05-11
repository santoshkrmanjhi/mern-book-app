import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const app = express();

app.use(cors());
app.use(express.json())
dotenv.config();


const PORT = process.env.PORT || 4000
const MongoDBURL = process.env.MongoDBURL;
//connect to mongodb
try{
  mongoose.connect(MongoDBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("Connected to mongoDb")
}catch(error){
  console.log("error: ",error)
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

//deployment
if(process.env.NODE_ENV ==="production"){
  const dirPath = path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve("Frontend","dist","index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
