import React from 'react';

const PotdInfo = (props) =>{


    return(
        <>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        
        </>
    );


};

export default PotdInfo;