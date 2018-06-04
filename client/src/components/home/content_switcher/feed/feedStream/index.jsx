import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { postsFetchData } from '../../../../../redux/actions/fetchAllPostsAction';
import Post from './posts/post';

const socket = io('http://localhost:3030');

class FeedStream extends React.Component {
  componentDidMount() {
    // this.props.clearUserPosts(true);
    this.props.fetchFeedData('http://localhost:3030/api/posts/getPosts');
    this.getPostUpdates();
  }

  getPostUpdates() {
    socket.on('new__posts', () => {
      this.props.fetchFeedData('http://localhost:3030/api/posts/getPosts');
    });
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

    return (
      <div className="feed__stream">
        {
          this.props.feedStream.map(post => (
            <Post
              key={post._id}
              owner={post.owner}
              createdAt={post.createdAt}
              content={post.content}
              comments={post.comments}
              imageURL={post.imageURL}
            />
          ))
        }
      </div>
    );
  }
}

FeedStream.propTypes = {
  fetchFeedData: PropTypes.func.isRequired,
  feedStream: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  // updateCount: PropTypes.number.isRequired,
  // updatePostCount: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    feedStream: state.posts,
    isLoading: state.postsIsLoading,
    hasErrored: state.postsHasErrored,
    userPosts: state.createPostSuccess,
    updateCount: state.updateCount,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchFeedData: url => postsFetchData(url),
    // clearUserPosts: bool => clearUserPosts(bool),
    // updatePostCount: () => updatePostCount(),
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(FeedStream);
