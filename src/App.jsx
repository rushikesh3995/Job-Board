import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Browse from "./Browse";
import Profile from "./assets/Profile";
import Blog from "./assets/Blog";
import Contact from "./assets/Contact";
import Img from "./assets/Img";
import Login from "./assets/Login";
import Job from "./Job";
import Register from "./Register";
import Applayjobs from "./Applayjobs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Job/>}/>

        <Route path="/job" element={<Job/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Applayjobs" element={<Applayjobs/>}/>

        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </>
  );
}

export default App;
