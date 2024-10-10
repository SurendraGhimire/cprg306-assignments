import React from 'react';
export default function Item (props) {
  return (    
      <ul className= "flex flex-col justify-items-start p-4 bg-blue-950 shadow-md my-4">
          <div>
              <li className= "text-lg font-semibold text--400">{props.name} </li>
          </div>
          <ul className="flex items-center space-x-1 text-gray-400">
              <li>
                  Buy {props.quantity} in {props.category}
                  </li>
          </ul>
      </ul>
  );
}