// Home_officials.jsx

import React from 'react';
import OfficialNavbar from './OfficialNavbar'; // Assuming the file is in the same directory
import HomeTweets from './HomeTweets'
import CrimeCards from './CrimeCard';

const HomeOfficials = () => {
  return (
    <div>
      <OfficialNavbar />
      <div>Home_officials</div>
      
      <CrimeCards/>
      

      {/* Add your content for the officials' home page here */}
    </div>
  );
}

export default HomeOfficials;
