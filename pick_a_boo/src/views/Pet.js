import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

const Pet = ({name, animal, breed, photos, location,id}) => {   
    let alt = 'https://res.cloudinary.com/dci7rk8xe/image/upload/v1631432062/react_myboo/no-image-300X300_fu0uq0.png'

    if (photos !== null) {
        alt = photos
    }

    return (
        <Link style={{ textDecoration: 'none' }} to={`/details/${id}`} className="pet" >
            <Card className='mb-5'>
                <Card.Img  src={alt} alt={name} style={{width: '100%', height:'300px', objectFit: 'cover'}} />
                <Card.Body variant='warning' style={{color: 'black', textAlign: 'center', textDecoration: 'none'}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{animal} - {breed} - {location}</Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Pet
