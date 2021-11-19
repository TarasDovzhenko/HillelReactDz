import React from "react";
import news from "../../data/news.json";
import Author from "../Author/Author";
import Categories from "../Categories/Categories";
import Checkbox from "../Checkbox/Checkbox";
import Date from "../Date/Date";
import Imgs from "../Imgs/imgs";
import IsSpecial from "../IsSpecial/IsSpecial";
import Links from "../Links/Links";
import Titles from "../Titles/Titles";
import Content from "../Сontent/Сontent";

class NewsOne extends React.Component {
  render() {
    return (
      <div className="news-one">
        <Checkbox />
        {news.map((el) => {
          return (
            <div key={el.id}>
              <ul className="list-items">
                <IsSpecial special={el.isSpecial} />
                <Titles title={el.title} />
                <Content content={el.content} />
                <Date date={el.dateCreated} />
                <Links link={el.link} />
                <Imgs photo={el.photo} />
                <Author author={el.author} />
                <Categories categories={el.categories} />
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsOne;
