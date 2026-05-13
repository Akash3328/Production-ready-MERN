import { useState , useEffect} from 'react'
import React from 'react'



import './App.css'

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));

  }, []);

  return (
    <div>
      <h1>Production Ready MERN</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App
