import React from 'react';
import PotdInfo from './potdInfo';
const PotdCard = (props) =>{
    

    return(

        <>
            <div className="potd_card">
                <img src={props.image} alt="NASA"/>
                <div className="text-contet">
                    <PotdInfo title={props.response.title} explanation={props.response.explanation} date={props.response.date} />
                </div>
                
            </div>

        </>
    );
};

export default PotdCard;