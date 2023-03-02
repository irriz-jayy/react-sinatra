import { useState, useEffect } from "react";

const View = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `http://localhost:9292/blogs/${props.match.params.id}`
        );
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [props.match.params.id]);

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default View;
