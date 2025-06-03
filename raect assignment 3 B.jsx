// Home.jsx
export default function Home() {
  return <h2>Home Page</h2>;
}

// Menu.jsx
export default function Menu() {
  return <h2>Menu Page</h2>;
}

// Location.jsx
export default function Location() {
  return <h2>Location Page</h2>;
}

// About.jsx
export default function About() {
  return <h2>About Page</h2>;
}
// Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/menu" style={{ marginRight: "1rem" }}>Menu</Link>
      <Link to="/location" style={{ marginRight: "1rem" }}>Location</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Location from './Location';
import About from './About';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
