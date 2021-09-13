import React from 'react';
import useBreedList from '../components/useBreedList';
import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { Client } from '@petfinder/petfinder-js';
import Results from '../components/Results';
import { Form } from 'react-bootstrap'


const client = new Client({apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_API_SECRET});
const animals = ['dog','cat']
const SearchParams = () => {
    const [location, setLocation] = useState('Orange, CA');
    const [animal, setAnimal] = useState('');
    const [breed, setBreed] = useState('');
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        getPets();
    },[])
    
    async function getPets() {
        const resp = await client.animal.search({
            type: `${animal}`,
            location: `${location}`,
            breed: `${breed}`,
            status: 'adoptable',
            sort: 'distance'
        });
        setPets(resp.data.animals);
    }

    return (
        <div className="search-params">
            <Form
                onSubmit = {e => {
                    e.preventDefault();
                    getPets();
                }}
            >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="location">
                        Location
                        <Form.Control
                            id='location'
                            onChange={e => setLocation(e.target.value)} 
                            value={location} 
                            placeholder="Location">
                        </Form.Control>
                    </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="animal">
                        Animal
                        <Form.Control
                            as="select"
                            id="animal"
                            value={animal}
                            onChange={e => setAnimal(e.target.value)}
                            onBlur={e => setAnimal(e.target.value)}
                        >
                            <option/>
                            {
                                animals.map(animal => (
                                    <option value={animal} key={animal}>
                                        {animal}
                                    </option>
                                ))
                            }
                        </Form.Control>
                    </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option/>
                        {breeds.map(breed => (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                        ))}
                    </select>
                </Form.Label>
                </Form.Group>

               

                <button style={{ backgroundColor: theme }}>Submit</button>
            </Form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams
