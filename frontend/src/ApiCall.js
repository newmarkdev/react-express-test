import React, { useEffect} from 'react';

// Fetch data from backend text api endpoint 
useEffect(() => {
  fetchItem();
}, []);

const fetchItem = () => {
  fetch("/test")
    .then(res => res.json())
    .then(json => console.log(json))
    // .then(item => setItem(json))
    .catch(err => console.error(err));
}


const ApiCall = () => {
  return (
      <div> Test </div>
  )
}

export default ApiCall;