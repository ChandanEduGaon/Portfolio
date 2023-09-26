import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/home/Home";
import AppHeader from "./components/common/header/AppHeader";
import Footer from "./components/common/footer/Footer";
import About from "./components/layouts/about/About";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen" id="bg">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
