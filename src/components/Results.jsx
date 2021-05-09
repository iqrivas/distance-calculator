import React from 'react';
import '../sass/components/_Results.scss'

function Results (props) {
    return (
        <section id="results" className="results">
          <h2 className= "results__title">Distance between Locations</h2>
          <p id="km"  className= "results__details">KM: </p>
          <p className= "results__details results__details--transit">Transit Time</p>
          <p id="drive" className= "results__details">Driving: </p>
          <p id="bike" className= "results__details">Bycicle: </p>
          <p id="walk" className= "results__details">Walking: </p>
        </section>
    );
}

export default Results;