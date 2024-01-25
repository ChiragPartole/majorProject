import React from 'react';

const DisplayInfo = ({ citizenInfo }) => {
  // Check if citizenInfo is undefined
  if (!citizenInfo) {
    return <div>No information available</div>;
  }

  // Destructure properties from citizenInfo
  const {
    name = 'John Doe',
    aadharNumber = '1234 5678 9012',
    phoneNumber = '9876543210',
    hasPreviousCrime = true,
    address = '123 Main Street, City',
    dateOfBirth = '01-01-1990',
    gender = 'Male',
  } = citizenInfo;

  return (
    <div>
      <h2>Criminal Information</h2>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={labelStyle}>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Aadhar Card Number:</td>
            <td>{aadharNumber}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Phone Number:</td>
            <td>{phoneNumber}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Has Previous Crime:</td>
            <td>{hasPreviousCrime ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Address:</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Date of Birth:</td>
            <td>{dateOfBirth}</td>
          </tr>
          <tr>
            <td style={labelStyle}>Gender:</td>
            <td>{gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tableStyle = {
  width: '50%',
  margin: '20px auto',
  borderCollapse: 'collapse',
  border: '1px solid #ddd',
};

const labelStyle = {
  fontWeight: 'bold',
  padding: '8px',
  border: '1px solid #ddd',
};

export default DisplayInfo;
