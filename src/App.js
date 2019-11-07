import React, {useState} from "react";
import "./App.css";
import Potd from "./componets/potd/Potd";



function App() {
  const today = new Date();
  const formatedDate = formatDateObj(today);
  console.log(formatedDate);
  const [apodDate, setApodDate] = useState();


  return (
    <div className="App">
      <Potd />
    </div>
  );
}

function formatDateObj(dateObj){
  return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
}

export default App;

