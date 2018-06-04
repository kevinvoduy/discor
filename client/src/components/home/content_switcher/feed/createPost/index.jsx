import React from 'react';
import PropTypes from 'prop-types';
import upload from 'superagent';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './createPost.sass';
import { createPost } from '../../../../../redux/actions/createPostAction';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.username,
      content: '',
      imageURL: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitContent = this.submitContent.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitContent(e) {
    e.preventDefault();

    this.props.createPost('http://localhost:3030/api/posts/createPost', { owner: this.state.owner, content: this.state.content, image: this.state.imageURL });
  }

  uploadPhoto(files) {
    console.log('files', files);
    upload.post('http://localhost:3030/api/uploads/photo')
    .attach('photo', files[0])
    .end(err => {
      if (err) console.error('failed to upload', err);
      console.log('File uploaded');
    });
  }

  render() {
    return (
      <div className="create__post">
        <div>
          <Dropzone onDrop={this.uploadPhoto} multiple="false">
            <div>Try dropping a file here, or click to select a file to upload.</div>
          </Dropzone>
        </div>

        <div className="content__type">
          <img src='assets/communication.png' alt="quote" id="quote" /><p>Share an update</p>
          <img src='assets/technology.png' alt="camera" id="camera" /><p>Upload a photo</p>
          <img src='assets/draw.png' alt="pencil" id="pencil" /><p>Share a post</p>
        </div>

        <div className="input__form">
          <form>
            <label htmlFor="content">
              <textarea
                name="content"
                type="text"
                placeholder="What's on your mind?"
                onChange={this.onChangeHandler}
              />
            </label>
          </form>

          <div className="submit">
            <button onClick={this.submitContent}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}


CreatePost.propTypes = {
  username: PropTypes.string.isRequired,
  createPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
    post: state.post,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    createPost: (url, payload) => createPost(url, payload),
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(CreatePost);
