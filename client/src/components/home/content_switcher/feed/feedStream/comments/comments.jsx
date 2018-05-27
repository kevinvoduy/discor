import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './comments.sass';

const dog = 'https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png';

const Comment = props => (
  <div className="comment">
    <img src={dog} alt="" id="imageURL" />
    <div className="name__comment">
      <p><strong>{props.owner}</strong>{' - '}{props.comment}</p>
    </div>
    <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
  </div>
);

Comment.propTypes = {
  owner: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // imageURL: PropTypes.string.isRequired,
};

export default Comment;
