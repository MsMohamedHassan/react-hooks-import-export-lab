import React from "react";
import{image} from "../data/user"
console.log(image.user)


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
      <user/>
    </div>
  );
}
export default About
