import React from "react";

import "./InputForm.css";
import MyDropdown from "./MyDropdown";

const InputForm = ({
  setText,
  setVehicleVal,
  setMinVal,
  setHourVal,
  onSubmit,
  text
}) => {
  const vehicle = ["Car", "Motorbike", "Heavy Vehicle"];
  const hour = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const mins = ["00", "15", "30", "45"];

  return (
    <div className="inputform rowC">
      <MyDropdown
        options={vehicle}
        type="Vehicle Type: "
        itemval={setVehicleVal}
      />
      <MyDropdown options={hour} type="Hours: " itemval={setHourVal} />
      <MyDropdown options={mins} type="Mins: " itemval={setMinVal} />
      <h3>
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Destination: </label>
            <input
              type="text"
              placeholder="Postal Code / Address"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Save Selection"
            className="btn btn-block"
          />
        </form>
      </h3>
    </div>
  );
};

export default InputForm;
