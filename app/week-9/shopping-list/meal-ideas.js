"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]); 
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  async function loadMealIdeas() {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  }
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">
        Meal Ideas for "{ingredient}"
      </h2>
      {meals.length > 0 ? (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-3 bg-gray-600 rounded-md flex items-center space-x-4"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 object-cover rounded-md"
              />
              <span className="text-white text-lg font-medium">
                {meal.strMeal}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No meal ideas found for "{ingredient}".</p>
      )}
    </div>
  );
}