import React from "react";
import NewsItem from "./NewsItems/NewsItem";
import news from "../../../data/news";

class NewsList extends React.Component {
  render() {
    return (
      <>
        {news.map((el) => {
          return (
            <div key={el.id}>
              <ul className="list-items">
                <NewsItem el={el} />
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default NewsList;
