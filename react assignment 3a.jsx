import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-4">
      <p>© 2025 My App. All rights reserved.</p>
    </footer>
  );
}
import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={item.image} alt={item.title} className="h-40 object-contain w-full mb-2" />
          <h2 className="font-bold text-lg">{item.title}</h2>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
export default function About() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">About Us</h2>
      <p>This is a demo app showcasing React routing, fetch, and components.</p>
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Include Tailwind or custom styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
