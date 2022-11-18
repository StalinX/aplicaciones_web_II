import React, { useState, useEffect } from "react";
import getBreeds from '../utils/getBreeds.js';
;

const initialBreeds = [
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);


  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  return (
    
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      

    

  );
};

export default Select;
