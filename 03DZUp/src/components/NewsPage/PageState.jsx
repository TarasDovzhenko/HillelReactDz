import React from "react";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsList from "./NewsList/NewsList";
import news from "../../data/news";

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

  testHandler = (event) => {
    this.setState((pev) => ({
      ...pev,
    }));

    console.log(event.target.checked);
  };

  render() {
    const filteredNews = news.filter((el) => {
      return el.photo;
    });

    return (
      <div>
        <NewsFilter options={options} onChange={this.testHandler} />
        <NewsList newsList={filteredNews} />
      </div>
    );
  }
}

export default State;
