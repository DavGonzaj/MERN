import react, { useState } from "react";

const NewBox = (props) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSend(color);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add a Color</h1>
        <textarea
          className="box"
          placeholder=" Any color you want "
          onChange={(e) => setColor(e.target.value)}
        ></textarea>{" "}
        <br></br>
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default NewBox;
