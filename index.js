/* cek node js */
// console.log('Hello World!');

/* import the express module */
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

/* Define the port number the server will listen on */
const PORT = 3000;

/* Create an instance of an express application */
/* Because it give us the starting point */ 
const app = express();

/* MongoDB connection string into your application code */
const DB = "mongodb+srv://wahyubudiprayogo8:Prayogo@cluster0.l8tusfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

/* middleware - to register routes or to mount routes */
app.use(express.json());
app.use(authRouter);

// Check if backend_api already connect to databases
mongoose.connect(DB).then(()=>{
     console.log('MongoDB has Connected');
     
} );

/* Start the server and listen on the specified port */
app.listen(PORT, "0.0.0.0", function(){
     // LOG THE NUMBER
     console.log(`Server is running on port ${PORT}`);
} );