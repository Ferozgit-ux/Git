import React, { useState } from "react";

const data = [
  { id: 1, name: "Apple", description: "A tasty fruit" },
  { id: 2, name: "Banana", description: "A yellow fruit" },
  { id: 3, name: "Cherry", description: "Small red fruit" },
  { id: 4, name: "Avocado", description: "Green and creamy" },
];

export default function CardSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cards based on search term
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="grid gap-4">
        {filteredData.map(item => (
          <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
}
