import React, { useState } from 'react';

const CitizenVer = () => {
  const [aadharNumber, setAadharNumber] = useState('');

  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any validation or submit logic here using the aadharNumber state.
    console.log('Aadhar Card Number submitted:', aadharNumber);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Aadhar Card Number:
          <input
            type="text"
            value={aadharNumber}
            onChange={handleInputChange}
            placeholder="Enter Aadhar Card Number"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CitizenVer;
