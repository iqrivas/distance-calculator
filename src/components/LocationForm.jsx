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
    });

    function calculateDistance(event) {
        event.preventDefault();
        let from = document.getElementById("origin_name").value;
        let to = document.getElementById("destination_name").value;

        var service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
        {
            origins: [from],
            destinations: [to],
            travelMode: 'DRIVING',
            unitSystem: window.google.maps.UnitSystem.METRIC,
        }, callbackDrive);

        service.getDistanceMatrix(
        {
            origins: [from],
            destinations: [to],
            travelMode: 'BICYCLING',
            unitSystem: window.google.maps.UnitSystem.METRIC,
        }, callbackBike);

        service.getDistanceMatrix(
            {
                origins: [from],
                destinations: [to],
                travelMode: 'WALKING',
                unitSystem: window.google.maps.UnitSystem.METRIC,
            }, callbackWalk);

        function callbackDrive(response, status) {
            if (status === 'OK') {

                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    document.getElementById("drive_km").innerHTML = `Distance: `;
                    document.getElementById("drive_hr").innerHTML = `Duration: `;
                    document.getElementById("no_roads").innerHTML = `
                    Better get on a plane! <br/> There are no roads between these locations`;
                    document.getElementById('results_panel').classList.add('hidden');
                } else {
                    document.getElementById("no_roads").innerHTML = "";
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;
                    document.getElementById("drive_km").innerHTML = `Distance: ${distance}`;
                    document.getElementById("drive_hr").innerHTML = `Duration: ${duration}`;
                    document.getElementById('results_panel').classList.remove('hidden');       
                }
            }
        }
        
        function callbackBike(response, status) {
            if (status === 'OK') {

                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    document.getElementById("bike_km").innerHTML = `Distance: `;
                    document.getElementById("bike_hr").innerHTML = `Duration: `;
                    
                } else {
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;
                    document.getElementById("bike_km").innerHTML = `Distance: ${distance}`;
                    document.getElementById("bike_hr").innerHTML = `Duration: ${duration}`;       
                }
            }
        }

        function callbackWalk(response, status) {
            if (status === 'OK') {

                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    document.getElementById("walk_km").innerHTML = `Distance: `;
                    document.getElementById("walk_hr").innerHTML = `Duration: `;
                    
                } else {
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;
                    document.getElementById("walk_km").innerHTML = `Distance: ${distance}`;
                    document.getElementById("walk_hr").innerHTML = `Duration: ${duration}`;
                           
                }
            }
        }

        document.getElementById('results').classList.remove('hidden');
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