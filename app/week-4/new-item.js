"use client";
import { useState } from "react";

export default function Page() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) { 
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="w-72 h-10 m-3">
          <div className="flex items-center justify-between border border-gray-500 shadow-lg rounded-lg">
            <div className="flex items-center justify-center w-16 p-3">
              <button
                onClick={decrement}
                disabled={quantity === 1}
                className="text-xl px-4 py-2 bg-green-600 hover:bg-red-600 disabled:bg-green-600 rounded-md"
              >
                -
              </button>
            </div>
            <div className="flex-grow p-4 text-center">
              <p className="text-3xl font-semibold text-white-600 hover:bg-blue-600 rounded-md">
                {quantity}
              </p>
            </div>
            <div className="flex items-center justify-center w-16 p-3">
              <button
                onClick={increment}
                disabled={quantity === 20}
                className="text-xl px-4 py-2 bg-green-600 hover:bg-red-600 disabled:bg-black-600 rounded-md"
              >
                +
              </button>
            </div>
          </div>
        </div>
      );
}