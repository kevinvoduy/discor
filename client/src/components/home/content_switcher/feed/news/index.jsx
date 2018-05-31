import React from 'react';
import axios from 'axios';

import './news.sass';
import data from './news.json';

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
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2018-05-30&to=2018-05-30&sortBy=popularity&apiKey=362b15f63c1a4372a36199dca8b4fa84')
    .then(articles => {
      this.setState({
        data: articles.data.articles,
      });
    });
  }

  render() {
    return (
      <div className="news__feed">
        {
          this.state.data.slice(0,5).map(article => (
            <div className="article" key={article.author}>
              <a href={article.url}><img src={article.urlToImage} alt="" /></a>
              <div className="article__details">
                <p id="title"><strong>{article.title}</strong></p>
                <p id="details">{article.description.slice(0,98) + '...'}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default News;