import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Details</h1>
      <p>Blog ID: {id}</p>
      {/* Display other blog details here */}
    </div>
  );
};

export default View;
