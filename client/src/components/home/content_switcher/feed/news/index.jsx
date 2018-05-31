import React from 'react';
// import PropTypes from 'prop-types';

import './news.sass';

const IMG = 'https://s3.reutersmedia.net/resources/r/?m=02&d=20180531&t=2&i=1267664444&w=1200&r=LYNXNPEE4U036';

const News = () => (
  <div className="news__feed">
    <img src={IMG} alt="" />
    <div className="article__details">
      <p id="title"><strong>China May factory growth at 8-month high</strong></p>
      <p id="details">Chinas vast manufacturing sector grew at the fastest pace in eight months in May, blowing past expectations and easing concerns...

      </p>
    </div>
  </div>
);

// News.propTypes = {
//   title: PropTypes.string.isRequired,
//   details: PropTypes.string.isRequired,
// };

export default News;