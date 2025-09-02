import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Program from "./Page/Program";
import Admission from "./Page/Admission";
import Contact from "./Page/Contact"; 
import Footer from "./Page/Footer";
import Login from "./Page/Login";

const App = () => {
  return (
    <>
  
      <Navbar />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

 
      <About />
      <Program />
      <Admission />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
