import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";   
import Login from "./components/Login";
import Courses from "./components/Courses";
import Blog from "./components/Blog";
import Bloge_react from "./components/ِBlogdetail";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Bloge_react/>}></Route>

      </Routes>
    </Router>
  );
}
