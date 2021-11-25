import React from "react";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsList from "./NewsList/NewsList";
import news from "../../data/news";

class State extends React.Component {
  state = {
    photo: false,
    link: false,
    special: false,
  };

  handlerPhoto = (newChecked) => {
    this.setState({
      photo: newChecked,
    });
  };

  handlerLink = (newChecked) => {
    this.setState({
      link: newChecked,
    });
  };

  handlerSpecial = (newChecked) => {
    this.setState({
      special: newChecked,
    });
  };

  render() {
    const { photo, special, link } = this.state;
    const filteredNews = news.filter((el) => {
      if (photo && !el.photo) {
        return false;
      }
      if (link && !el.link) {
        return false;
      }
      if (special && !el.isSpecial) {
        return false;
      }
      return true;
    });

    return (
      <div>
        <NewsFilter
          photo={photo}
          link={link}
          special={special}
          handlerPhoto={this.handlerPhoto}
          handlerLink={this.handlerLink}
          handlerSpecial={this.handlerSpecial}
        />
        <NewsList newsList={filteredNews} />
      </div>
    );
  }
}

export default State;
