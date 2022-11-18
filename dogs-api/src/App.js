import React, { useState, useEffect } from 'react';
import Select from './components/Select.js';
import Card from './components/Card.js';
import getDog from './utils/getDog.js';


const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }
  
  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
