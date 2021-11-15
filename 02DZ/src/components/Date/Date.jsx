import React from 'react';
import news from '../../data/news.json';

class Date extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <>
        <li className="date">{date}</li>
      </>
    );
  }
}

export default Date;
