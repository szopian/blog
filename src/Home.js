import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "blog text...", author: "x1", id: 1 },
    { title: "blog2", body: "blog text...", author: "x2", id: 2 },
    { title: "blog3", body: "blog text...", author: "x1", id: 3 },
  ]);

  const [name, setName] = useState("person1");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("used effect");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Greg")}>change me</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
