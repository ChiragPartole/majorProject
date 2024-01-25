// LatestTweets.jsx

import React from 'react';

const LatestTweets = () => {
  // Assume tweetsData is an array of tweet objects fetched from an API
  const tweetsData = [
    {
      id: 1,
      content: 'This is the first tweet. #CrimeManagement',
      author: 'OfficialAccount1',
    },
    {
      id: 2,
      content: 'Another tweet to keep you updated. #SecurityAlert',
      author: 'OfficialAccount2',
    },
    // Add more tweet objects as needed
  ];

  const tweetStyles = {
    latestTweetsContainer: {
      marginTop: '20px',
    },
    tweetsList: {
      listStyle: 'none',
      padding: 0,
    },
    tweetItem: {
      border: '1px solid #ccc',
      marginBottom: '10px',
      padding: '10px',
    },
    tweetContent: {
      fontSize: '16px',
    },
    tweetAuthor: {
      fontStyle: 'italic',
      marginTop: '5px',
    },
  };

  return (
    <div style={tweetStyles.latestTweetsContainer} className="latest-tweets-container">
      <h3>Latest Tweets</h3>
      <ul style={tweetStyles.tweetsList} className="tweets-list">
        {tweetsData.map((tweet) => (
          <li key={tweet.id} style={tweetStyles.tweetItem} className="tweet-item">
            <div style={tweetStyles.tweetContent} className="tweet-content">{tweet.content}</div>
            <div style={tweetStyles.tweetAuthor} className="tweet-author">- {tweet.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestTweets;
