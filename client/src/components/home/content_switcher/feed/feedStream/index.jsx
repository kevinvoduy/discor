import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postsFetchData } from '../../../../../redux/actions/fetchAllPostsAction';
import './feedStream.sass';

class FeedStream extends React.Component {
  componentDidMount() {
    this.props.fetchFeedData('http://localhost:3030/api/posts/getPosts');
    // this.setFeedStreamToState();
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
        <h4>Feed Stream</h4>
        {
          this.props.feedStream.map(post => (
            <div className="post" key={Date.now}>
              <h4>{post.owner}</h4>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
            </div>
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
};

const mapStateToProps = state => {
  return {
    feedStream: state.posts,
    isLoading: state.postsIsLoading,
    hasErrored: state.postsHasErrored
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchFeedData: url => postsFetchData(url),
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(FeedStream);
