import React from 'react';
import news from '../../data/news.json';

class Description extends React.Component {
  render() {
    let desc = news.map((el) => {
      return <h3 className="descript">{el.title}</h3>;
    });
    return desc;
  }
}

export default Description;
