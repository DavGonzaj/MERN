import react, { useState } from "react";

const BoxDisplay = (props) => {
  return (
    <div style={{ display: "inline-flex" }}>
      {props.color.map((value) => (
        <div
          className="boxes"
          style={{
            backgroundColor: value,
            width: "150px",
            height: "150px",
            margin: "20px",
          }}
        >
          {" "}
          {value}{" "}
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;
