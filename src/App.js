import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import NewBlog from "./components/NewBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-blog" element={<NewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
