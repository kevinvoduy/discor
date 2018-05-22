import React from 'react';
import UploadContent from './uploadContent';
import FeedStream from './feedStream';

const Feed = () => (
  <div className="feed">
    <h3>Feed Component</h3>
    <UploadContent />
    <FeedStream />
  </div>
);

export default Feed;