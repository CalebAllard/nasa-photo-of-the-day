import React, {useState} from "react";
import "./App.css";
import Potd from "./componets/potd/Potd";



function App() {
  const today = new Date();
  const formatedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  console.log(formatedDate);
  const [apod, setApod] = useState();


  return (
    <div className="App">
      <Potd />
    </div>
  );
}

export default App;
