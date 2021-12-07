import React from "react";
import NewsItem from "./NewsItems/NewsItem";

import PropTypes from "prop-types";

class NewsList extends React.Component {
  render() {
    const { items, onRemoveNews } = this.props;
    return (
      <ul className="news-one">
        {items.map((el) => {
          return (
            <li key={el.id} className="list-items">
              <NewsItem el={el} onRemoveNews={onRemoveNews} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NewsList;

NewsList.propTypes = {
  items: PropTypes.array,
  onRemoveNews: PropTypes.func.isRequired,
};

NewsList.defaultProps = {
  items: [],
};
