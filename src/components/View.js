import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const View = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9292/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleOpen = () => {
    setTitle(blog.title);
    setContent(blog.content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Save the changes to the backend
    fetch(`http://localhost:9292/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the blog state with the changes
        setBlog(data);
        handleClose();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Blog</h1>
      {blog ? (
        <>
          <p>Title: {blog.title}</p>
          <p>Content: {blog.content}</p>
          <p>Author ID: {blog.author_id}</p>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Edit
          </Button>
        </>
      ) : (
        <span class="loader"></span>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default View;
