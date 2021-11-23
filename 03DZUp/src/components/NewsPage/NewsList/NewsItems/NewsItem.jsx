import React from "react";

import Author from "./Author/Author";
import Categories from "./Categories/Categories";
import Date from "./Date/Date";
import Imgs from "./Imgs/imgs";
import IsSpecial from "./IsSpecial/IsSpecial";
import Links from "./Links/Links";
import Titles from "./Titles/Titles";
import Content from "./Сontent/Сontent";

class NewsItem extends React.Component {
  render() {
    const { el } = this.props;
    return (
      <>
        <IsSpecial special={el.isSpecial} />
        <Titles title={el.title} />
        <Content content={el.content} />
        <Date date={el.dateCreated} />
        <Links link={el.link} />
        <Imgs photo={el.photo} />
        <Author author={el.author} />
        <Categories categories={el.categories} />
      </>
    );
  }
}

export default NewsItem;
