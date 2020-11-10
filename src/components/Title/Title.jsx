import React from "react";
const Background = require("./Images/Artistic-4K-Wallpaper-3840x2160.jpg");

function Title(props) {
  return (
    <div
    id="Title"
    style={{
      height: "1200px",
      width: "auto",
      display: "flex",
      margin: "auto",
    }}
    >
      <div id="Title" className="item" style={{
        width: "auto",
        display: "flex",
        margin: "auto",
        fontSize: "55px",
      }}>
        Marc Anthony Rodriguez
      </div>
      <img src={Background} alt="background"/>
    </div>
  );
}
export default Title;
