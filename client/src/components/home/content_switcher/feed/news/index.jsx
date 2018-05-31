import React from 'react';
// import PropTypes from 'prop-types';

import './news.sass';

const IMG = 'https://techcrunch.com/wp-content/uploads/2018/05/img_1281.jpg?w=561';
const SRC = 'https://techcrunch.com/2018/05/30/uber-is-looking-at-adding-benefits-and-insurance-for-drivers/';
const DETAILS = 'At the Code Conference tonight, Uber CEO Dara Khosrowshahi spoke about the company’s relationship with drivers, autonomous driving, uberEATS having a $6 billion bookings run rate, taking over as CEO and flying taxis, obviously.';

const IMG1 = 'https://techcrunch.com/wp-content/uploads/2018/02/gettyimages-836405266.jpg?w=615';
const SRC1 = 'https://techcrunch.com/2018/05/30/even-more-money-for-senstime-ai-china/';
const DETAILS1 = 'SenseTime, the world’s highest-valued AI company with a valuation of over $4.5 billion, is back in the money again. The company raised $600 million in an Alibaba-led financing round announced last month, and now it has added a further $620 million to that';

const News = () => (
  <div className="news__feed">
    <div className="article">
      <a href={SRC}><img src={IMG} alt="" /></a>
      <div className="article__details">
        <p id="title"><strong>Uber is looking at adding benefits and insurance for drivers</strong></p>
        <p id="details">{DETAILS.slice(0,104) + '...'}</p>
      </div>
    </div>

    <div className="article">
      <a href={SRC1}><img src={IMG1} alt="" /></a>
      <div className="article__details">
        <p id="title"><strong>Uber is looking at adding benefits and insurance for drivers</strong></p>
        <p id="details">{DETAILS1.slice(0,104) + '...'}</p>
      </div>
    </div>
  </div>
);

// News.propTypes = {
//   title: PropTypes.string.isRequired,
//   details: PropTypes.string.isRequired,
// };

export default News;