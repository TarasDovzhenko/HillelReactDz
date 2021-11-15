import React from 'react';
import news from '../../data/news.json';

class Content extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <>
        <li
          className="content"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></li>
      </>
    );
  }
}

export default Content;
