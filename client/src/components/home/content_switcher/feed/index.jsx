import React from 'react';
import UploadContent from './uploadContent';
import FeedStream from './feedStream';

import './feed.sass';

const Feed = () => (
  <div className="feed">
    <UploadContent />
    <FeedStream />
  </div>
);

export default Feed;