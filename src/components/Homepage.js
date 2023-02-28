import Header from "./Header";
import Welcome from "./Welcome";
import Post from "./Post";

const Homepage = () => {
  return (
    <div className="home">
      <Welcome />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Homepage;
