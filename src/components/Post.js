import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Post = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((response) => response.json())
      .then((blogs) => setBlogs(blogs));
  }, []); // <-- add an empty dependency array here

  const handleDelete = async (id) => {
    console.log("clicked", id);
    try {
      const response = await fetch(`http://localhost:9292/blogs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Blog deleted successfully");
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      {blogs.map((blog, id) => (
        <div className="card-body" key={id}>
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.content}</p>
          <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
            View blog
          </Link>
          {"  "}
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => handleDelete(blog.id)}
          >
            Delete
          </a>
        </div>
      ))}
    </div>
  );
};

export default Post;
