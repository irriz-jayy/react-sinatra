import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import NewBlog from "./components/NewBlog";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
