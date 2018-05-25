import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './uploadContent.sass';

const dog = 'https://www.freefavicon.com/freefavicons/animal/dou-shou-qi-dog-152-194532.png';

class UploadContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.username,
      content: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitContent = this.submitContent.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitContent() {
    axios.post('http://localhost:3030/api/posts/createPost', { owner: this.state.owner, content: this.state.content })
      .then((post) => {
        console.log('successfully created post:', post);
      })
      .catch(err => {
        console.error('failed to create post:', err);
      });
  }

  render() {
    return (
      <div className="upload__content">
        <div className="content__type">
          <img src={dog} alt="quote" id="quote" /><p>Share an update</p>
          <img src={dog} alt="camera" id="camera" /><p>Upload a photo</p>
          <img src={dog} alt="pencil" id="pencil" /><p>Share a post</p>
        </div>

        <div className="input__form">
          <form>
            <label htmlFor="content">
              <textarea name="content" type="text" placeholder="What's on your mind?" onChange={this.onChangeHandler} />
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

UploadContent.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.username__store.username,
  };
};


export default connect(mapStateToProps)(UploadContent);
