import React, {useState, useEffect} from 'react';
import PotdCard from "./PotdCard";
import axios from "axios";

const Potd = () => {
    
    const [thisData,setData] = useState({});
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Bo5ZYL7ES3AkrX6WxaGcvedXXhOx7JUtp7TTt8Xo')
        .then(resp => {
            console.log(resp);
            setData(resp.data);

           
        })
        .catch(error => {
            console.log(`error : ${error}`);
        });


    },[]);
    return (

        <div className="card_group">
            <PotdCard image={thisData.url} response={thisData} />
            {/* {console.log(thisData)} */}

        </div>
    );
};

export default Potd;