import React, {useState, useEffect} from 'react';
import PotdCard from "./PotdCard";
import Axios from "axios";

const Potd = () => {
    
    const [img,setImg] = useState("");
    useEffect(()=>{
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=Bo5ZYL7ES3AkrX6WxaGcvedXXhOx7JUtp7TTt8Xo')
        .then(resp => {
            console.log(resp);
            setImg = resp.data;
        })
        .catch(error => {
            console.log(`error : ${error}`);
        });


    },[]);
    return (

        <>
            <PotdCard />        
        </>
    );
};

export default Potd;