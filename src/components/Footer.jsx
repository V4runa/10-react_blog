import React from "react";

export default function Footer(){
//Footer content here.
const date = new Date().getFullYear();
return (
  <div className="footer">
    <div>
      <h1>Copyright ⓒ {date}</h1>
    </div>
  </div>
)
};

