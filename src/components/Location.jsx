import React from 'react';
import '../sass/components/_Location.scss'

function Location (props) {
    return (
        <section id={props.id} className="location">
          <h2 className= "location__title">{props.title}</h2>
          <input
              className= "location__input"  
              type="text"
              placeholder={props.placeholder}
              id={`autocomplete-${props.id}`}
          />
          <p id={`${props.id}_lat`}  className= "location__details">Latitude: </p>
          <p id={`${props.id}_lng`} className= "location__details">Longitude: </p>
        </section>
    );
}

export default Location;