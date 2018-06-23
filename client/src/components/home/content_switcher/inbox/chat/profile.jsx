import React from 'react';

const Profile = () => (
  <div className="profile">
    <div className="user__info">
      <img src="" alt="" id="userImg" />
      <h5>James Velle</h5>
      <p>robertatimms@gmail.com</p>
      <p>+1 31 217 8736</p>

      <div className="contact__buttons">
        <img src="" alt="phone" id="icon" />
        <img src="" alt="email" id="icon" />
      </div>
    </div>

    <div className="images">
      <h5>Shared Images</h5>
      <img src="" alt="" id="shared__image" />
      <img src="" alt="" id="shared__image" />
      <img src="" alt="" id="shared__image" />
      <img src="" alt="" id="shared__image" />
    </div>
  </div>
);

export default Profile;
