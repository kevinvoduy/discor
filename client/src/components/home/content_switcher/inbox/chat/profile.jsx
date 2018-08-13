import React from 'react';
import PropTypes from 'prop-types';

import './profile.sass';

const Profile = (props) => (
  <div className="profile">
    <div className="user__info">
      <h1>Profile</h1>
      <img src={props.message.userImg} alt='' id='user__img' />
      <h5>{props.message.name}</h5>
      <p>HelloFrom@discor.us</p>
      <p>+1 31 217 8736</p>

      <div className="contact__buttons">
        <img src="assets/phone.svg" alt="phone" id="icon" />
        <img src="assets/mail.svg" alt="email" id="icon" />
      </div>
    </div>

    <div className="images">
      <h5>Shared Images</h5>
      <div className="shared__images">
        <div className="column left">
          <img src="https://images.pexels.com/photos/1005456/pexels-photo-1005456.jpeg?auto=compress&cs=tinysrgb&h=375&w=630" alt="" id="shared__image" />
          <img src="https://images.pexels.com/photos/990349/pexels-photo-990349.jpeg?auto=compress&cs=tinysrgb&h=375&w=630" alt="" id="shared__image" />
        </div>
        <div className="column right">
          <img src="https://images.pexels.com/photos/951235/pexels-photo-951235.jpeg?auto=compress&cs=tinysrgb&h=375&w=630" alt="" id="shared__image" />
          <img src="https://images.pexels.com/photos/1194406/pexels-photo-1194406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630" alt="" id="shared__image" />
          <img src="https://images.pexels.com/photos/1192106/pexels-photo-1192106.jpeg?auto=compress&cs=tinysrgb&h=375&w=630" alt="" id="shared__image" />
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Profile;
