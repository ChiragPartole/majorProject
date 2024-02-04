import React from 'react';
import { Timeline, Tweet } from 'react-twitter-widgets';

const HomeTweets = () => {
  const tweetContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the tweets horizontally
    padding: '30px', // Adjust the padding as needed
  };

  const tweetBoxStyle = {
    margin: '0 10px', // Add space between the tweets
    border: '1px solid #ccc', // Add a border to create a box
    borderRadius: '8px', // Optional: Add border radius for rounded corners
  };

  const tweetStyle = {
    width: '200px', // Adjust the width as needed
    height: '200px', // Adjust the height as needed
    padding: '10px', // Adjust the padding as needed
  };

  return (
    <div style={tweetContainerStyle}>
      <div style={tweetBoxStyle}>
        <Tweet tweetId='1721826985067122804' style={tweetStyle} />
      </div>
      <div style={tweetBoxStyle}>
        <Tweet tweetId='1719368455504478616' style={tweetStyle} />
      </div>
      {/*<Timeline dataSource={{
        sourceType:'profile',
        screenName:'starplus'
      }}/>*/}
    </div>
  );
};

export default HomeTweets;
