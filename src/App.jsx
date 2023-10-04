import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/layouts/Home";
import AppHeader from "./components/common/AppHeader";
import Footer from "./components/common/Footer";
import About from "./components/layouts/About";
import Contact from "./components/layouts/Contact";
import Projects from "./components/layouts/Projects";
import Preview from "./components/layouts/Preview";

function App() {
  return (
    <Router>
      <div className="main w-screen h-screen max-w-screen overflow-auto" id="bg">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/preview" element={<Preview />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
