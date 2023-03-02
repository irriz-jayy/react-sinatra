import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import NewBlog from "./components/NewBlog";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/edit-blog" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
