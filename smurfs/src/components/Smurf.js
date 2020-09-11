import React, { Fragment } from 'react';

function Smurf(props) {
    console.log('blue thingys', props); 
    return (
        <div>
            <h3>{props.smurfs.name}</h3>
            <p>{props.smurfs.age}</p>
            <p>{props.smurfs.height}</p>
        </div>
    )
}

export default Smurf;