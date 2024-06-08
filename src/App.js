// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/sideBar";
import logo from "./Images/Assets/Methyl Logo_Long.png";
import logowhite from "./Images/Assets/white.png";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import MainPage from "./Pages/MainPage";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";
import useLogoStore from "./Store/logostore";

function App() {
  const { whitelogo } = useLogoStore();
  return (
    <Router>
      <div className="App">
        <header className="header">
          {/* Place the logo inside the header */}
          <img
            src={whitelogo ? logowhite : logo}
            alt="Logo"
            style={{
              position: "absolute",
              left: "10px",
              zIndex: "1000",
            }}
            className="image"
          />
          <Sidebar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path={`/Portfolio/:projectName`} element={<Project />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
