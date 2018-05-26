import React from 'react';
import UploadContent from './uploadContent';
import FeedStream from './feedStream';

import './feed.sass';

const Feed = () => (
  <div className="feed">
    <div className="user__posts">
      <UploadContent />
      <FeedStream />
    </div>
    <div className="suggestions">
      <div>
        <h5>suggestions</h5>
        <h5>people you know know</h5>
      </div>
    </div>
  </div>
);

export default Feed;