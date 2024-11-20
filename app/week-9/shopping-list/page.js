"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useUserAuth } from '../path-to-auth-context';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemData from "./item.json";

export default function Page() {
  const { user } = useUserAuth(); 
  const router = useRouter(); 
  if (!user) {
    router.push("/");
    return null; 
  }

  const [items, setItems] = useState(itemData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-5">Shopping List</h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1">
          <div className="flex flex-col items-start mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}