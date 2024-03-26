const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const {db} = require('./db/db');
// const {router} = require('./routes/transactions')
const { default: mongoose } = require("mongoose");
const {readdirSync} =require('fs');
const app = express();
dotenv.config();

// const connectDB = async () => {
//     try {
//       const connect = await mongoose.connect(process.env.MONGO_URI);
//       console.log("Server is connected to DB");
//     } catch (error) {
//       console.log("Server is NOT connected to Database", error.message);
//     }
//   };
   
//   connectDB();

// app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
   

  const PORT = process.env.PORT || 5000;
   


//middeleWares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () =>{
    db()
    app.listen(PORT,() => {
        console.log('listening to port',PORT);
    })
}
server();


