import React from "react";
import { makeNewsData, makeNews } from "../../data/data";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsForm from "./NewsForm/NewsForm";
import NewsList from "./NewsList/NewsList";
import { AUTHOR, HASHTAGS } from "../../data/data";

const newsData = makeNewsData();

class State extends React.Component {
  state = {
    items: newsData,
    isEditing: false,
    filters: false,
    search: "",
    tegSearch: "",
    authorSearch: "",
  };

  addNews = (newNews) => {
    console.log("-----------------", newNews);
    this.setState({
      items: [newNews, ...this.state.items],
    });
  };

  removeMovie = (newsID) => {
    this.setState({
      items: this.state.items.filter((news) => news.id !== newsID),
    });
  };

  addRandomNews = () => {
    this.addNews(makeNews());
  };

  handleSearch = (newSearch) => {
    this.setState({
      search: newSearch,
    });
  };

  handleTegSearch = (newSearch) => {
    this.setState({
      tegSearch: newSearch,
    });
  };

  handleAuthorSearch = (newSearch) => {
    this.setState({
      authorSearch: newSearch,
    });
  };

  render() {
    const { items, isEditing, filters, search, tegSearch, authorSearch } =
      this.state;
    // const hashtagData = HASHTAGS.filter((srcHashtag) => {
    //   return hashtag.indexOf(srcHashtag.value) !== -1;
    // });

    const filteredNews = items.filter((el) => {
      if (
        el.title.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
        el.description.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
        el.content.toLowerCase().indexOf(search.toLowerCase()) < 0
      )
        return false;

      if (el.author.toLowerCase().indexOf(authorSearch.toLowerCase()) < 0)
        return false;

      // if (el.hashtag.indexOf(tegSearch.toLowerCase()) < 0) return false;

      if (el.hashtag.includes(tegSearch)) {
        return false;
      }

      return true;
    });
    return (
      <div className="movies-page">
        <div className="movies-page__list">
          <div className="movies-page__cations">
            <button onClick={this.addRandomNews}>Add a random news</button>
            <button onClick={() => this.setState({ isEditing: !isEditing })}>
              {isEditing ? "Cancel" : "Add a news"}
            </button>
            <button onClick={() => this.setState({ filters: !filters })}>
              {filters ? "Cancel" : "Add filters"}
            </button>
          </div>
          {filters && (
            <NewsFilter
              search={search}
              tegSearch={tegSearch}
              authorSearch={authorSearch}
              handleTegSearch={this.handleTegSearch}
              handleSearch={this.handleSearch}
              handleAuthorSearch={this.handleAuthorSearch}
            />
          )}
          {isEditing && <NewsForm onAddNews={this.addNews} />}
          <NewsList newsList={filteredNews} onRemoveNews={this.removeMovie} />
        </div>
      </div>
    );
  }
}

export default State;
