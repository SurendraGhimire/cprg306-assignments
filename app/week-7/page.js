"use client"; 
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); 
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-5">Shopping List</h1>
      <div className="flex flex-col items-start mb-6">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <ItemList items={items} />
    </main>
  );
}