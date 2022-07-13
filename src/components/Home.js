import React from "react";
import{username, city} from "../data/user"
console.log(username.user)
console.log(city.user)


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
      <user/>
    </div>
  );
}
export default Home