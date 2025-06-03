import React, { useEffect, useState } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example JSON placeholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Cards</h1>

      {showMessage && (
        <div style={{ padding: "10px", backgroundColor: "#ffeeba", marginBottom: "20px" }}>
          👋 This message appeared after 5 seconds!
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cards.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
