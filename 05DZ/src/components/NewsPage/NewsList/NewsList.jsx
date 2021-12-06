import React from "react";
import NewsItem from "./NewsItems/NewsItem";
// import news from "../../../data/news";
import PropTypes from "prop-types";

class NewsList extends React.Component {
  addMovie = (newNews) => {
    console.log("-----------------", newNews);
    this.setState({
      news: [newNews, ...this.props.news],
    });
  };

  render() {
    return (
      <ul className="news-one">
        {this.props.newsList.map((el) => {
          return (
            <li key={el.id} className="list-items">
              <NewsItem el={el} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NewsList;

NewsList.propTypes = {
  newsList: PropTypes.array,
};

NewsList.defaultProps = {
  newsList: [],
};
