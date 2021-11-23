import React from "react";
import NewsItem from "./NewsItems/NewsItem";
// import news from "../../../data/news";

class NewsList extends React.Component {
  render() {
    return (
      <ul className="news-one">
        {this.props.newsList.map((el) => {
          return (
            <li className="list-items">
              <NewsItem key={el.id} el={el} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NewsList;
