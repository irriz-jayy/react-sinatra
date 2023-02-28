import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
