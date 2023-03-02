import "../App.css";
import { useState, useEffect } from "react";

const Post = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []); // <-- add an empty dependency array here

  return (
    <div className="card">
      {blogs.map((blog, id) => (
        <div className="card-body" key={id}>
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.content}</p>
          <a href="#" className="btn btn-primary">
            Update
          </a>{" "}
          <a href="#" className="btn btn-danger">
            Delete
          </a>
        </div>
      ))}
    </div>
  );
};

export default Post;
