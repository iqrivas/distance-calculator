import React from 'react';
import '../sass/components/_Location.scss'

function Location (props) {
    return (
        <section className="location">
          <h2 className= "location__title">{props.title}</h2>
          <input
              className= "location__input"  
              type="text"
              placeholder={props.placeholder}
              id={props.id}
          />
        </section>
    );
}

export default Location;