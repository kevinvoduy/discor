import React from 'react';
// import PropTypes from 'prop-types';

import './news.sass';

const IMG = 'https://techcrunch.com/wp-content/uploads/2018/05/img_1281.jpg?w=561';
const SRC = 'https://techcrunch.com/2018/05/30/uber-is-looking-at-adding-benefits-and-insurance-for-drivers/';
const DETAILS = 'At the Code Conference tonight, Uber CEO Dara Khosrowshahi spoke about the company’s relationship with drivers, autonomous driving, uberEATS having a $6 billion bookings run rate, taking over as CEO and flying taxis, obviously.';

const News = () => (
  <div className="news__feed">
    <a href={SRC}><img src={IMG} alt="" /></a>
    <div className="article__details">
      <p id="title"><strong>Uber is looking at adding benefits and insurance for drivers</strong></p>
      <p id="details">{DETAILS.slice(0,104) + '...'}</p>
    </div>
  </div>
);

// News.propTypes = {
//   title: PropTypes.string.isRequired,
//   details: PropTypes.string.isRequired,
// };

export default News;