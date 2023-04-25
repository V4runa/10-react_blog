import React, { useState } from "react";
import axios from "axios";
import Postcard from "./Postcard";

const Post = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Create an object with the data entered from the form.//
    const newPost = {
      imageUrl,
      title,
      description,
      content,
      author,
    }

    try {
      // Send POST request to the express backend using axios with the newPost object//
      await axios.post("/api/post", newPost);

      //handle successful submission: show success message and clear the form. //
      console.log("Blog post created successfully!");
      setImageUrl("");
      setTitle("");
      setDescription("");
      setContent("");
      setAuthor("");
    } catch (error) {
      //Handle error by showing error message. //
      console.error("Error creating blog post.", error);
    }
  }

  return (
    <div className="createPostContainer">
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      //input fields will go here. //
      <input
      type="text"
      placeholder="Image Url"
      value={imageUrl}
      onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
      placeholder="Brief Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />
      <textarea 
        placeholder="Your thoughts here."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">
        Create Post
      </button>
    </form>
    </div>
    <Postcard 
    img={imageUrl} 
    title={title}
    description={description}
    content={content}
    author={author}
    date={date}
   />
   </div> 
  );
};

export default Post;