import Header from "./components/Header";
import React, { useState } from "react";
import GMaps from "./components/GMaps";
import InputForm from "./components/InputForm";

function App() {

  const [showDropdowns, setShowDropDowns] = useState(false);
  const [text, setText] = useState("");

  const [VehicleVal, setVehicleVal] = useState("");
  const [HourVal, setHourVal] = useState("");
  const [MinVal, setMinVal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add an Address");
      return;
    }
    console.log(text);
    setText("");
    console.log(VehicleVal);
    console.log(HourVal);
    console.log(MinVal);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowDropDowns(!showDropdowns)}
        showAdd={showDropdowns}
      />
      {showDropdowns && (
        <InputForm
          setText={setText}
          setVehicleVal={setVehicleVal}
          setHourVal={setHourVal}
          setMinVal={setMinVal}
          onSubmit = {onSubmit}
          text = {text}
        />
      )}
      <div>
        <GMaps />
      </div>
    </div>
  );
}

export default App;
