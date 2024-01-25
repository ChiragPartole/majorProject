// CrimeCards.jsx

import React from 'react';

const CrimeCard = ({ title, description }) => {
  return (
    <div className="crime-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CrimeCards = () => {
  // Assume this is your existing CSS for the component
  const styles = `
    .crime-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 20px;
    }

    .crime-card {
      border: 1px solid #ccc;
      padding: 15px;
      margin: 10px;
      text-align: center;
      width: 300px;
    }

    .crime-card h3 {
      margin-bottom: 10px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      {/* Crime Cards */}
      <div className="crime-cards-container">
        <CrimeCard
          title="Crime Profiling"
          description="View detailed profiles of different types of crimes in the region."
        />
        <CrimeCard
          title="Crime Prediction"
          description="Predict potential crime hotspots based on historical data and patterns."
        />
        <CrimeCard
          title="Crime Mapping"
          description="Visualize crime data on a map to identify trends and patterns geographically."
        />
        <CrimeCard
          title="Crime Management"
          description="Comprehensive tools for managing and analyzing crime-related information."
        />
      </div>
    </div>
  );
};

export default CrimeCards;
