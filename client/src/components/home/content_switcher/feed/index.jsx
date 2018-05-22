import React from 'react';
import UploadContent from './uploadContent';
import FeedStream from './feedStream';

const Feed = () => (
  <div className="feed">
    <h4>Feed Component</h4>
    <UploadContent />
    <FeedStream />
  </div>
);

export default Feed;