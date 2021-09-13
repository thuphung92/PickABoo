import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({name, animal, breed, photos, location,id}) => {   
    let alt = 'https://res.cloudinary.com/dci7rk8xe/image/upload/v1631432062/react_myboo/no-image-300X300_fu0uq0.png'

    if (photos.length) {
        alt = photos
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={alt} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>
                    {animal} - {breed} - {location}
                </h2>
            </div>
        </Link>
    )
}

export default Pet
