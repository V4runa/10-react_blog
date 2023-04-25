const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

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
  id: {
    type: String,
    default: uuidv4(), // Set the default value to a generated UUID using uuidv4
    unique: true // Ensure that the ID is unique
  },
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
//CRUD METHODS//
//
app.post('/api/post', async (req, res) => {
  try {
    //Extract relevant fields from the request body
    const { imageUrl, title, description, content, author } = req.body;

    //Get the current date and time
    const currentDate = new Date();

    //Create new blog post object with the extracted fields and current time
    const blogPost = new BlogPost({
      id,
      imageUrl,
      title,
      description,
      content,
      author,
      date: currentDate, //Add the date field
    });

    //Save the blog post object to the database
    await blogPost.save();

    //send success response
    res.status(200).json({ message: "Blog post created successfully!" });
  } catch (error) {
    //handle error, send error response
    res.status(500).json({ error: "Failed to create blog post."})
  }
})
//
//Fetch data from db
//
app.get("/api/posts", async (req, res) => {
  try {
    //fetch all posts from the db
    const posts = await BlogPost.find();
    //Send the posts as response to the client
    res.json(posts);
  } catch {
    //Handle any errors that occur during the fetch
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

//
//Start Server//
//
app.listen(3000, () =>{
  console.log("Server started on port 3000");
});