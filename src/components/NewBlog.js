import "../App.css";

const NewBlog = () => {
  return (
    <div className="item-container">
      <form>
        <div class="mb-3 m-4">
          <label for="exampleFormControlInput1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
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
