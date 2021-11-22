import React from "react";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsList from "./NewsList/NewsList";

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
        <NewsFilter options={options} />
        <NewsList />
      </div>
    );
  }
}

export default State;
