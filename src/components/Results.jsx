import React from 'react';
import '../sass/components/_Results.scss'

function Results (props) {
    return (
        <section id="results" className="results hidden">
          <h2 className= "results__title">Distance between Locations</h2>
          <p id="no_roads" className= "results__details results__details--warning"></p>
          <div id="results_panel" className="hidden">
            <p className= "results__details results__details--transit">Driving</p>
            <p id="drive_km" className= "results__details">Distance: </p>
            <p id="drive_hr" className= "results__details">Duration: </p>
            <p className= "results__details results__details--transit">Bicycling</p>
            <p id="bike_km" className= "results__details">Distance: </p>
            <p id="bike_hr" className= "results__details">Duration: </p>
            <p className= "results__details results__details--transit">Walking</p>
            <p id="walk_km" className= "results__details">Distance: </p>
            <p id="walk_hr" className= "results__details">Duration: </p>
          </div>
        </section>
    );
}

export default Results;