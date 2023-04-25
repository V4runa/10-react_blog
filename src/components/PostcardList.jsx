import { Axios } from "axios";
import { response } from "express";
import React, {useState, useEffect} from "react";
import Postcard from "./Postcard";


const PostcardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //Fetch post date from backend API
    Axios.get('/api/posts')
    .then(response => {
      //update state with received posts data
      setPosts(response.data)
    })
    .catch(error => {
      console.error('Failed to fetch', error)
    });
  }, []);
  return (
    <div>
      {posts.map(post => (
        <Postcard key={post.id} img={post.imageUrl} title={post.title} description={post.description} content={post.content} author={post.author} date={post.date}/>
      ))}
    </div>
  );
};

export default PostcardList;