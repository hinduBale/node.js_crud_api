const express = require("express"); //Express provided us with the functionality of using Routes (by exporting the router)
const mongoose = require('mongoose'); // Mongoose was used to create the Post schema for storage in  MongoDB and it also provided cool methods
                                      // on the schema, such as findById, remove, updateOne etc. Also used to connect to the DB
const bodyParser = require("body-parser"); //Used to make req.body work 
const cors = require("cors"); // Used such that our API can be called by external sources
require('dotenv/config'); // Used to store password for the DB User safely in the .env file. It didn't require the const require drama

//app gives us the ability to create routes
const app = express();

// Middlewares
// Functions that are executed when routes are being hit
app.use(bodyParser.json());
app.use(cors());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); //Also a middleware. Simply means, whenever the user navigates to /posts, use *postRoute*

//ROUTES
// Example of the most rudimentry method of using routes(without the express' router)
app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connect to db here
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => 
    console.log("Connected to the DB!!")
);

// Start listening to the server
app.listen(3000);