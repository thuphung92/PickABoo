import React from 'react'
import Pet from '../views/Pet'

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h2>No Pet Found</h2>
            ) : (
                pets.map((pet) => (
                    <Pet
                        key = {pet.id} 
                        animal = {pet.type}
                        name = {pet.name}
                        breed = {pet.breeds.primary}
                        location = {`${pet.contact.address.city}, ${pet.contact.address.state}`}
                        id = {pet.id}
                        photos = {pet.primary_photo_cropped !== null? pet.primary_photo_cropped.small : null}
                    />
                ))
            )}          
        </div>
    )
}

export default Results
