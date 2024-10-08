import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const Home = () => (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Welcome to chocobrownie!</h1>
        <p className="subtitle">Team Members</p>
        <ul className="team-list">
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/elias-frigui-680b51263/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Elias
              </a>
              <span className="email">21ef32@queensu.ca</span>
            </div>
          </li>
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/momin-alvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Momin
              </a>
              <span className="email">momin.alvi@queensu.ca</span>
            </div>
          </li>
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/ahmadtahir04/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Ahmad
              </a>
              <span className="email">21amt25@queensu.ca</span>
            </div>
          </li>
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/elill-mathivannan/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Elill
              </a>
              <span className="email">21em73@queensu.ca</span>
            </div>
          </li>
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/amaan-javed/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Amaan
              </a>
              <span className="email">amaan.javed@queensu.ca</span>
            </div>
          </li>
          <li className="team-member">
            <div className="member-box">
              <a
                href="https://www.linkedin.com/in/henry-xiu/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-name"
              >
                Henry
              </a>
              <span className="email">21hx14@queensu.ca</span>
            </div>
          </li>
        </ul>
        <p className="description">Check out our amazing project!</p>
      </header>
    </div>
  );

  return (
    <Router>
      <div className="App">
        {/* Message beside the hamburger */}
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <span className="hamburger-message">Click here to view our different projects</span>

        <nav className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/a1" onClick={toggleMenu}>A1</Link>
            </li>
            <li>
              <Link to="/a2" onClick={toggleMenu}>A2</Link>
            </li>
            <li>
              <Link to="/a3" onClick={toggleMenu}>A3</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a1" element={<A1 />} />
          <Route path="/a2" element={<A2 />} />
          <Route path="/a3" element={<A3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;