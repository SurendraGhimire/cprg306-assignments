import React from 'react';
import ItemList from "./item-list";
const Page = () => {
    return (
      <main className="h-screen">
        <h1 className="text-5xl font-bold mb-4">Shopping List</h1>
        <ItemList />
      </main>
    );
  };
  export default Page;