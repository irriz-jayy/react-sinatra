import { useEffect, useState } from "react";
import "../App.css";

const NewBlog = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Ive been submitted");

    const data = { title, content };
    try {
      const response = await fetch("http://localhost:9292/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Blog added successfully");
      setTitle("");
      setContent("");
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="item-container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3 m-4">
          <label for="exampleFormControlInput1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3 m-4">
          <label for="exampleFormControlTextarea1" class="form-label">
            Content
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
