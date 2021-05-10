import React from 'react';
import '../sass/components/_Location.scss'

function Location ({ id, title, placeholder, inputValue, onInputChange }) {

    return (
        <section id={id} className="location">
          <h2 className= "location__title">{title}</h2>
          <input
              className= "location__input"  
              type="text"
              placeholder={placeholder}
              id={`autocomplete-${id}`}
          />
          <input id={`${id}_name`} name={id} required="" type="hidden" value={inputValue} onChange={onInputChange}/>
          <p id={`${id}_lat`} className= "location__details">Latitude: </p>
          <p id={`${id}_lng`} className= "location__details">Longitude: </p>
        </section>
    );
}

export default Location;