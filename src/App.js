import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Router } from "express";
import Post from "./components/Post";
import PostcardList from "./components/PostcardList";

function App() {
  return (
    <div className="App">
      <Header />
    <Router>
      <switch>
        <route exact path="/" component={PostcardList} />
        <route exact path="/new" component={Post} />
      </switch> 
    </Router>
      <Footer />
    </div>
  );
}

export default App;
