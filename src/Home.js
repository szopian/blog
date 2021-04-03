import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("greg");
  const [age, setAge] = useState("32");

  const handleClick = () => {
    setName("adri");
    setAge("38");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{name + age}</p>
    </div>
  );
};

export default Home;
