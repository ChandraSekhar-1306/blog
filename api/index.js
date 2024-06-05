import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGODBURL)
.then(
    ()=>{ console.log('mongodb database connected !!')}
)
.catch(
    (err)=>{ console.log(err)}
)

const app = express();

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000!")
})