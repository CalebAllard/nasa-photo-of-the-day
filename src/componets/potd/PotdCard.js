import React from 'react';
import PotdInfo from './potdInfo';
// import styled from'styled-components';
import {PordCard} from '../../styled';

// const PordCard = styled.div`

// display:flex;
// justify-content:space-between;
// align-content:center;
// max-width:100%;





// `;

const PotdCard = (props) =>{
    

    return(

        <>
            <PordCard>
                <img src={props.image} alt="NASA"/>
                <div className="text-contet">
                    <PotdInfo title={props.response.title} explanation={props.response.explanation} date={props.response.date} />
                </div>
                
            </PordCard>

        </>
    );
};

export default PotdCard;