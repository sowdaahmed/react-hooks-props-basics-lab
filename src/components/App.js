
import React from "react";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Ayan Mohamed",
    bio: "Frontend developer diving into backend development.",
    github: "https://github.com/sowdaahmed",
    linkedin: "https://www.linkedin.com/in/ayanmohamed"
  };

  return (
    <div>
      <Home name={user.name} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
