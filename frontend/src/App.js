import React, { useState, useEffect } from 'react';

export const App = () => {
const [item, setItem] = useState([]);

// Fetch data from backend test api endpoint 
useEffect(() => {
  fetchItem();
}, []);

const fetchItem = () => {
  fetch("/test-title")
    .then(res => res.json())
    .then(items => setItem(items))
    .catch(err => console.error(err));
}

  return (
    <div>
      <p>The test title is: {item.title}</p>
    </div>
  )
}