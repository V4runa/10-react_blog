const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const app = express();
//
//conect to mongoDb//
//
mongoose.connect('mongodb://127.0.0.1:51653/BlogDb', { useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
  console.log("Connected to MongoDb" );
})
.catch((err) => {
  console.error('Failed to connect to MongoDb', err);
});
//
//Define Models//
//

//BlogPost schema
const blogPostSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: {type: String, required: true},
  content: {type: String, required: true},
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
// Create BlogPost model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;
//
//Start Server//
//
app.listen(3000, () =>{
  console.log("Server started on port 3000");
});