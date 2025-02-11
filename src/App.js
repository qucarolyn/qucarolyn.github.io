import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Personal Website</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Info</Link></li>
              <li><Link to="/blog">Blog Posts</Link></li>
              <li><Link to="/experience">Professional Experience</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2>About Me</h2>
      <p>This is the homepage of my personal website.</p>
    </section>
  );
}

export default App;