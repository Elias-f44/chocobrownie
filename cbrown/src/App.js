// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Welcome to the chocobrownie!</h1>
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
              <span className="email">momin@example.com</span>
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
              <span className="email">elill@example.com</span>
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
        <p className="description">
          Check out our amazing project!
        </p>
      </header>
    </div>
  );
}

export default App;
