import React from 'react';

const CrimeCard = ({ title, description, img }) => {
  const cardStyle = {
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Text color for better visibility on the background image
  };

  return (
    <div className="crime-card" style={cardStyle}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CrimeCards = () => {
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
      height: 200px; /* Adjust the height as needed */
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      background: rgba(0, 0, 0, 0.7); /* Add a semi-transparent background for better text visibility */
      padding: 10px;
      border-radius: 0 0 8px 8px; /* Apply border radius only to the bottom corners */
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
          img="https://cdn.gencraft.com/prod/user/07264a01-d9a9-40bb-bae3-daccd5226ab4/555d1c42-7d15-45b5-babc-b3b9b9323426/image/image0_0.jpg?Expires=1706286632&Signature=iGPkxLlWMw8YLEXn48hWEcpZZj~YCrNQH~XfL7epMbNwqQp9C9FMP6Eq1Kt8aCxnLicPGwOQ0KDumclmz89RCh0SVAe4Fe71zA-DSTSpq2zKb60kzm94nLg~ShyXdrMkYjFuMD7myAGSNhELegcMlio6RZwNO~Pc~AZAM-yhYVEEHRKfQHjKyEyDbiagV62-ckjoM-bCIGmtMgrYm7SHHLip9TOgVMd8nDnwmMJPp6A053ujIU1kp-IIFqQlPCf40th0qKukOuXIEKpgyKaxo5IFwT0E1RwtaVWhDUPniergujRkpcDZad8HXBpAzsjlQ6pr0gJv1kMoGNenWzwK4g__&Key-Pair-Id=K3RDDB1TZ8BHT8"  // Add the URL of your image here
          description="View detailed profiles of different types of crimes in the region."
        />
        <CrimeCard
          title="Crime Prediction"
          img="https://dl.acm.org/cms/attachment/23219234-0efb-4d19-bc58-6ddcb8729045/icca2022-58-fig1.jpg"  // Add the URL of your image here
          description="Predict potential crime hotspots based on historical data and patterns."
        />
        <CrimeCard
          title="Crime Mapping"
          img="https://cdn2.vectorstock.com/i/1000x1000/96/86/cartoon-grunge-earth-map-icon-vector-16119686.jpg"  // Add the URL of your image here
          description="Visualize crime data on a map to identify trends and patterns geographically."
        />
        <CrimeCard
          title="Crime Management"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZ5Dr9ylGzAmeOzICUfwLu3k85IMITFAEgWMde0_2LFfEotaV8Dz4DcwHA2RM2Z3Seu4&usqp=CAU"  // Add the URL of your image here
          description="Comprehensive tools for managing and analyzing crime-related information."
        />
      </div>
    </div>
  );
};

export default CrimeCards;
