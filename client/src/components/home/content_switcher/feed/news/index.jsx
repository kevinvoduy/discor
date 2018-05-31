import React from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import './news.sass';

const IMG = 'https://s3.reutersmedia.net/resources/r/?m=02&d=20180531&t=2&i=1267664444&w=1200&r=LYNXNPEE4U036';

const News = () => (
  <div className="news__feed">
    <h4>News Feed</h4>
    <img src={IMG} alt="" />
    <p id="details">{'China\'s vast manufacturing sector grew at the fastest pace in eight months in May, blowing past expectations and easing concerns...'}</p>
  </div>
);

// News.propTypes = {
//   article: PropTypes.string.isRequired,
// };

export default News;