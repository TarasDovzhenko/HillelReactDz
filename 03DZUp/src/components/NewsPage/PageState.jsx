import React from "react";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsList from "./NewsList/NewsList";
import news from "../../data/news";

import Author from "./NewsList/NewsItems/Author/Author";
import Categories from "./NewsList/NewsItems/Categories/Categories";
import Date from "./NewsList/NewsItems/Date/Date";
import Imgs from "./NewsList/NewsItems/Imgs/imgs";
import IsSpecial from "./NewsList/NewsItems/IsSpecial/IsSpecial";
import Links from "./NewsList/NewsItems/Links/Links";
import Titles from "./NewsList/NewsItems/Titles/Titles";
import Content from "./NewsList/NewsItems/Сontent/Сontent";

const options = [
  { label: "Photo", value: "Photo" },
  { label: "Link", value: "Link" },
  { label: "Special", value: "Special" },
];

class State extends React.Component {
  state = {
    checked: {
      Photo: false,
      Link: false,
      Special: false,
    },
  };

  handleSelectPhoto = (value) => {
    this.setState({
      checked: {
        ...this.state.checked,
        [value]: !this.state.checked[value],
      },
    });
    console.log("Lalala");
  };
  render() {
    return (
      <div className="news-one">
        <NewsFilter />
        <NewsList />
      </div>
    );
  }
}

export default State;
