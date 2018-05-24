import React from 'react';
import './uploadContent.sass';

const dog = 'https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png';

const UploadContent = () => (
  <div className="upload__content">
    <div className="content__type">
      <img src={dog} alt="quote" id="quote" /><p>Share an update</p>
      <img src={dog} alt="camera" id="camera" /><p>Upload a photo</p>
      <img src={dog} alt="pencil" id="pencil" /><p>Share a post</p>
    </div>

    <div className="input__form">
      <form>
        <label htmlFor="status">
          <textarea name="status" type="text" placeholder="What's on your mind?" />
        </label>
      </form>

      <div className="submit">
        <button>Post</button>
      </div>
    </div>

  </div>
);

export default UploadContent;
