import React, { useState, useEffect } from 'react';
import Location from './Location';
import Button from './Button';

function LocationForm () {
    const [originName, setOriginName] = useState('');
    const [destinationName, setDestinationName] = useState('');

    function handleChangeOrigin(event) {
        setOriginName(event.target.value);
    }

    function handleChangeDestination(event) {
        setDestinationName(event.target.value);
        console.log({destinationName})
    }

    useEffect(() => {
        document.getElementById("origin_name").addEventListener("change", handleChangeOrigin);
        document.getElementById("destination_name").addEventListener("change", handleChangeDestination);
      }, []);

    function calculateDistance(event) {
        event.preventDefault();
        let from = document.getElementById("origin_name").value;
        let to = document.getElementById("destination_name").value;
        console.log(from, to)
    }

    return (
        <>
            <Location id="origin" title="Origin" placeholder="Enter origin address" inputValue={originName} onInputChange={handleChangeOrigin} />
            <Location id="destination" title="Destination" placeholder="Enter destination address" inputValue={destinationName} onInputChange={handleChangeDestination}/>
            <Button type="calc" text="Calculate Distance" onClick={calculateDistance}/>
        </>
    );
}

export default LocationForm;