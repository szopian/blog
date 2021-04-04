import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog1", body: "blog text...", author: "x1", id: 1 },
    { title: "blog2", body: "blog text...", author: "x2", id: 2 },
    { title: "blog3", body: "blog text...", author: "x1", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "x1")}
        title="x1 blogs"
      />
    </div>
  );
};

export default Home;
