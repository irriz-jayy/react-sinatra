import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>Blog</h1>
      {blog ? (
        <>
          <p>Title: {blog.title}</p>
          <p>Content: {blog.content}</p>
          <p>Author ID: {blog.author_id}</p>
          <button className="btn btn-secondary">Edit</button>
        </>
      ) : (
        <p>Loading blog details...</p>
      )}
    </div>
  );
};

export default View;
