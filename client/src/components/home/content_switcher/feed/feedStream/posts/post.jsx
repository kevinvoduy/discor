import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../comments/comments';
import './post.sass';

const dog = 'https://frostsnow.com/uploads/biography/2017/11/16/levy-tran.gif';

const Post = props => (
  <div className="post">
    <div className="content">
      <img src={dog} alt="" id="imageURL" />
      <h4 id="owner">{props.owner}</h4>
      <p id="createdAt">1d</p>
      <p id="content">{props.content}</p>
    </div>

    <div className="comments">
      {
        props.comments.map(comment =>(
          <Comment
            key={comment._id}
            owner={comment.owner}
            comment={comment.comment}
          />
        ))
      }
    </div>

    <button>Reply</button>
  </div>
);

Post.propTypes = {
  owner: PropTypes.string.isRequired,
  // createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

export default Post;
