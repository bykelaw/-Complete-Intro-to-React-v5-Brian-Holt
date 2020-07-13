import React, { useState } from 'react'
// import { ANIMALS } from "@frontendmasters/pet";
const ANIMALS = ['Bingo', 'Swible', 'Squish', 'Zidle', 'lion', 'Naughty Humans']
const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [step, increasestep] = useState(3)
    const [animal, setAnimal] = useState('dog')
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <input
                        className="riser"
                        value={step}
                        onClick={(e) =>
                            increasestep(parseInt(e.target.value) ** 2)
                        }
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <input
                        // value="I love to sing songs"
                        placeholder="I will sing before the love of my life"
                    />
                    <select
                        value={animal}
                        id="animal"
                        onChange={(e) => setAnimal(e.target.value)}
                        onBlur={(e) => setAnimal(e.target.value)}
                    >
                        <option> ALL </option>
                        {ANIMALS.map((animal) => (
                            <option value={animal}> {animal} </option>
                        ))}
                    </select>
                </label>
                <label>
                    <input
                        type="textarea"
                        style={{
                            height: 'fitContent',
                            width: 'fitContent',
                        }}
                    />
                </label>
                <label htmlFor="">
                    <input type="color" value="Select your color" />
                </label>
                <button>Submit </button>
            </form>
        </div>
    )
}
export default SearchParams
