import React, { useState } from "react";

const Postcard = ({title, description, img, date, content, author}) => {
//Postcard contents here.
//state for additional content or styles.
const [isExpanded, setExpanded] =useState(false);

//function to handle click event for expanding/collapsing. 
const handleToggle = () => {
  setExpanded(!isExpanded);
} ;

return (
  <div className="postcard">
    <img src={img} alt="something interesting."/>
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
    <span>{author}</span>
    <span>{date}</span>
    </div>
//additional content or styles for collapsed state.//
    {isExpanded && (
    <div className="expanded">
      <div className="container">
        <img src={img} alt="Something amazing." />
      </div>
      <div className="top">  
        <h1>{title}</h1>
        <h3>{content}</h3>
      </div>
      <div className="bottom">
        <p>{author}</p>
        <p>{date}</p>
//additional content or styles for expanded state.//
      </div>
    </div>
  )}
  <button onClick={handleToggle}>
    {isExpanded ? 'collapse' : 'expand'}
  </button>
  </div>
);
};



export default Postcard;

