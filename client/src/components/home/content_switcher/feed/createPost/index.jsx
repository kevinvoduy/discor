import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import upload from 'superagent';
import Dropzone from 'react-dropzone';

import './createPost.sass';
import { createPost } from '../../../../../redux/actions/createPostAction';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.username,
      content: '',
      imageURL: '',
      accepted: [],
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

  submitContent() {
    this.props.createPost('http://localhost:3030/api/posts/createPost', { owner: this.state.owner, content: this.state.content, imageURL: this.state.imageURL });
    document.getElementById('form').reset();
  }

  uploadPhoto(files) {
    upload.post('http://localhost:3030/api/uploads/photo')
    .attach('photo', files[0], files[0].name)
    .end((err, res) => {
      if (err) console.error('failed to upload', err);
      this.setState({
        imageURL: 'https://s3-us-west-1.amazonaws.com/discor-photos/' + files[0].name,
      });
      console.log('state', this.state, res.text);
    });
  }

  render() {
    return (
      <div className="create__post">
        <div className="content__type">
          <img src='assets/communication.png' alt="quote" id="quote" /><p>Share an update</p>
          <img src='assets/technology.png' alt="camera" id="camera" /><p>Upload a photo</p>
          <img src='assets/draw.png' alt="pencil" id="pencil" /><p>Share a post</p>
        </div>

        <div className="input__form">
          <Dropzone
            className="dropzone"
            disableClick
            accept="image/jpeg, image/png"
            multiple={false}
            onDrop={accepted => { this.setState({ accepted }); }}
            onDropAccepted={this.uploadPhoto}
          >
            <form id="form">
              <label htmlFor="content">
                <textarea
                  name="content"
                  type="text"
                  placeholder="Write a post or try dropping an image here!"
                  onChange={this.onChangeHandler}
                />
              </label>
            </form>
          </Dropzone>

          <aside className="accepted__file">
            {
              this.state.accepted.map(image => {
                return (
                  <div key={image.name}>
                    <p>✔{' '}{image.name}</p>
                  </div>
                );
              })
            }
          </aside>

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
