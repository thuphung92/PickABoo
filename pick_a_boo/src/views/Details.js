import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Client } from '@petfinder/petfinder-js';
import Carousel from '../components/Carousel';
import ErrorBoundary from '../ErrorBoundary';

const client = new Client({apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_API_SECRET});

class Details extends Component {
    state = { loading: true };
   
    async componentDidMount() {
        const resp = await client.animal.show(this.props.match.params.id)
        const pet = resp.data.animal

        let breed;
            if (pet.breeds.unknown) {
                breed = 'unknown'
            } else if (pet.breeds.mixed === true) {
                breed = `${pet.breeds.primary}, ${pet.breeds.secondary}`
            } else {
                breed = pet.breeds.primary
            }

        this.setState({
            name : pet.name,
            animal: pet.type,
            location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
            age: pet.age,
            size: pet.size,
            gender: pet.gender,
            description: pet.desciption? pet.description: "This information hasn't been updated yet.",
            houseTrained: pet.attributes.house_trained === true ? "Yes" : "No",
            breed,
            media: pet.photos,
            loading: false
        });
    }

    render() {

        if (this.state.loading) {
            return <h2>loading...</h2> // add loading spin later
        }

        const { name, animal, breed, age, size, gender, description, location, houseTrained, media } = this.state;
       
        return (
            <div className='details'>
                <Carousel media={media}/>
               <div>
                    <h1>{name}</h1>
                    <h3>{animal} - {breed} - {location} </h3>  
                </div>
                <div>
                    <h3>{age} - {gender} - {size}</h3>
                </div>
                <div>
                    <h2>About</h2>
                    <div>
                        <h4>CHARACTERISTICS</h4>
                        {description}
                    </div>
                    <div>
                        <h4>HOUSE-TRAINED</h4>
                        { houseTrained }
                    </div>
                    <button>Adopt {name} </button>
                </div>          
            </div>
        )
    }
}


const DetailsWithRouter = withRouter(Details)

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
};

