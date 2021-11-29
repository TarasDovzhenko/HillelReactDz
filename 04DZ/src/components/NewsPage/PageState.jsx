import React from "react";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsList from "./NewsList/NewsList";
import news from "../../data/news";
import PropTypes from "prop-types";

class State extends React.Component {
  state = {
    photo: false,
    link: false,
    special: false,
    search: "",
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

  handleSearch = (newSearch) => {
    this.setState({
      search: newSearch,
    });
  };

  render() {
    const { photo, special, link, search } = this.state;
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

      if (
        el.title.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
        el.author.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
        el.content.toLowerCase().indexOf(search.toLowerCase()) < 0
      )
        return false;

      return true;
    });

    return (
      <div>
        <NewsFilter
          photo={photo}
          link={link}
          special={special}
          search={search}
          handleSearch={this.handleSearch}
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
