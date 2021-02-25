import React from 'react';

function Heroni(props){
    return(
        <div style={{border: '2px solid hotpink',padding: '10px', margin: '20px', borderRadius: '10px'}}>
            <h2>Heroni Name: {props.name} </h2>
            <h3>Job: {props.job} Age:{props.age} </h3>
        </div>
    );
}

export default Heroni;