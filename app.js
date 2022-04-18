const express = require("express")
const router = require("./router")
const bodyparser = require("body-parser")
const dotenv = require("dotenv")

const app = express();

app.use(express.json());

app.use(bodyparser.urlencoded({  extended: true }));


dotenv.config()
app.use('',router)



const {mongoose} = require("mongoose")

// connecting the database

mongoose.connect(
    `mongodb+srv://subhash:9740532080@cluster0.9mqnc.mongodb.net/Ecommerce?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
  
      useUnifiedTopology: false
    }
  ).then(()=>{
    app.listen(4000,()=>{
        console.log("server is started")
    })
  }).catch((err)=>{
      console.log(err)
  })
