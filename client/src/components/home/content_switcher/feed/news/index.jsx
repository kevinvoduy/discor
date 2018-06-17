import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import moment from 'moment';

import './news.sass';
// enable in development
import data from './news.json';

const key = process.env.NEWS_API_KEY;

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data.articles,
    };
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  componentDidMount() {
    // enable in production
    // this.fetchArticles();
  }

  fetchArticles() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + key)
    .then(articles => {
      this.setState({
        data: articles.data.articles,
      });
    });
  }

  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      draggable: false,
      fade: true,
      lazyLoad: 'ondemand'
    };

    return (
      <div className="news__feed">
        <Slider {...settings}>
          {
            this.state.data.slice(0,3).map(article => (
              <div className="article" key={article.author}>
                <a href={article.url}>
                  <img src={article.urlToImage} alt="" />
                </a>

                <div className="article__details">
                  <p id="createdAt">{moment(article.publishedAt).format('dddd, MMMM Do')} - {article.source.name}</p>
                  <p id="title">{article.title.length>75 ? article.title.slice(0,75) + '...' : article.title}</p>
                  <p id="details">{article.description.slice(0,90) + '...'}</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default News;