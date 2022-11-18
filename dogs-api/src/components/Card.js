import React from 'react'

const Card = ({ dog, loading, updateDog }) => {

    return (
        <div className="card bounce" >
            <img 
                src={dog.image}
                alt="dog"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card
