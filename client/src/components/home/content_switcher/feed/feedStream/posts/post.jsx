import React from 'react';
import PropTypes from 'prop-types';

const dog = 'https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png';

const Post = props => (
  <div className="post">
    <div className="content">
      <img src={dog} alt="" id="imageURL" />
      <h4 id="owner">{props.owner}</h4>
      <p id="createdAt">1d</p>
      <p id="content">{props.content}</p>
    </div>

    <div className="comments">
      <p>
        {
          props.comments[0].comment
        }
      </p>
    </div>

    <button>Reply</button>
  </div>
);

Post.propTypes = {
  owner: PropTypes.string.isRequired,
  // createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
