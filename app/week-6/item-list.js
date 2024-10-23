"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4 space-x-2">
        <span>Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`p-2 ${sortBy === "name" ? 'bg-blue-500':'bg-gray-500'}`}
        >
        Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 ${sortBy === "category" ? 'bg-blue-500':'bg-gray-500'}`}
        >
        Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}