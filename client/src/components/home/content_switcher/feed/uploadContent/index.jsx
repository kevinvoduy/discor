import React from 'react';

const UploadContent = () => (
  <div className="upload__content">
    <h4>Upload Content</h4>
    <div className="content__type">
      <ul>
        <li><img src="" alt="quote" />Share an update</li>
        <li><img src="" alt="camera" />Upload a photo</li>
        <li><img src="" alt="pencil" />share a post</li>
      </ul>
    </div>

    <div className="input form">
      <form>
        <label htmlFor="status">
          <input name="status" type="text" placeholder="What's on your mind?" />
        </label>
      </form>
    </div>

    <div className="submit">
      <button>Post</button>
    </div>
  </div>
);

export default UploadContent;
