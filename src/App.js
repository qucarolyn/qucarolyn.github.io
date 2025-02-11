import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Readings from './pages/Readings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm Carolyn</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Thoughts & Musings</Link></li>
              <li><Link to="/readings">What I'm Reading</Link></li>
              <li><Link to="/experience">Professional Experience</Link></li>
              <li><Link to="/contact">Contact Info</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/readings" element={<Readings />} />
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
      <h2>Hi, I'm Carolyn</h2>
      <p>This website is under construction. Come back soon! (or follow along, up to you!)</p>
    </section>
  );
}

export default App;