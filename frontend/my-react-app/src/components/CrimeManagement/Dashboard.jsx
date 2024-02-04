import React from 'react';

// Placeholder data for crime statistics
const crimeData = [
  { type: 'Theft', count: 120 },
  { type: 'Assault', count: 45 },
  { type: 'Burglary', count: 30 },
  // Add more crime types as needed
];

// Component for displaying individual crime statistics
const CrimeStat = ({ type, count }) => (
  <div className="crime-stat">
    <h4>{type}</h4>
    <p>{count} incidents</p>
  </div>
);

// Component for the Crime Dashboard
const CrimeDashboard = () => {
  return (
    <div className="crime-dashboard">
      <h2>Recent Year Crime Dashboard</h2>

      <div className="crime-stats-container">
        {crimeData.map((crime, index) => (
          <CrimeStat key={index} type={crime.type} count={crime.count} />
        ))}
      </div>
    </div>
  );
};

// Styles for the components
const styles = `
  .crime-dashboard {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .crime-stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .crime-stat {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
  }
`;

const Dashboard = () => (
  <div>
    <style>{styles}</style>
    <CrimeDashboard />
  </div>
);

export default Dashboard;
