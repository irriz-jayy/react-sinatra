import "../App.css";

const Post = () => {
  return (
    <div className="card">
      {/* <div className="card-header">Featured</div> */}
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          explicabo nobis eos reiciendis sunt est. Corrupti aspernatur,
          consectetur deleniti, et nostrum reiciendis assumenda beatae illo nisi
          odit vero, dolorum necessitatibus!
        </p>
        <a href="#" className="btn btn-primary">
          Update
        </a>{" "}
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Post;
