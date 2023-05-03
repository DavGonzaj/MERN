<button onClick={() => this.setState({ addAge: this.state.addAge + 1 })}>
    Birthday Button for {firstName} {lastName}
</button>

import React from "react";

const PersonCard = ({lastName, firstName, age, hairColor}) => {
  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
    
  );
};

export default PersonCard;