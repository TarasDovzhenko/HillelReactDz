import React from "react";
import { makeNewsData, makeNews } from "../../data/data";
import NewsForm from "./NewsForm/NewsForm";
import NewsList from "./NewsList/NewsList";

const newsData = makeNewsData();

class State extends React.Component {
  state = {
    items: newsData,
    isEditing: false,
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

  render() {
    const { items, isEditing } = this.state;
    return (
      <div className="movies-page">
        <div className="movies-page__list">
          <div className="movies-page__cations">
            <button onClick={this.addRandomNews}>Add a random news</button>
            <button onClick={() => this.setState({ isEditing: !isEditing })}>
              {isEditing ? "Cancel" : "Add a news"}
            </button>
          </div>
          {isEditing && <NewsForm onAddNews={this.addNews} />}
          <NewsList items={items} onRemoveNews={this.removeMovie} />
        </div>
      </div>
    );
  }
}

export default State;
