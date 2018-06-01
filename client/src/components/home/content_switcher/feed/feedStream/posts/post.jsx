import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Comment from '../comments/comments';
import './post.sass';

const levy = 'https://frostsnow.com/uploads/biography/2017/11/16/levy-tran.gif';

moment.updateLocale('en', {
  relativeTime : {
      past:   '%s ago',
      s  : '%ds',
      ss : '%ds',
      m:  '1m',
      mm: '%dm',
      h:  '1h',
      hh: '%dh',
      d:  '1d',
      dd: '%dd',
      M:  '1mo',
      MM: '%dmo',
      y:  '1y',
      yy: '%dy'
  }
});

const Post = props => (
  <div className="post">
    <div className="content">
      <img src={levy} alt="" id="imageURL" />
      <h4 id="owner">{props.owner}</h4>
      <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
      <p id="content">{props.content}</p>
    </div>

    <div className="comments">
      {
        props.comments.map(comment =>(
          <Comment
            key={comment._id}
            owner={comment.owner}
            comment={comment.comment}
            createdAt={comment.createdAt}
          />
        ))
      }
    </div>

    <div className="meta">
      <img src="assets/heart.png" alt="" id="like" />
      <p>Like</p>
      <img src="assets/communication.png" alt="" id="comment" />
      <p>Comment</p>
    </div>
  </div>
);

Post.propTypes = {
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

export default Post;
