import React, { useState } from "react";
import { makeNewsData, makeNews } from "../../data/data";
import NewsFilter from "./NewsFilters/NewsFilter";
import NewsForm from "./NewsForm/NewsForm";
import NewsList from "./NewsList/NewsList";

const newsData = makeNewsData();

function State(props) {
  const [items, setAddNews] = useState(newsData);
  const [isEditing, setEditing] = useState(false);
  const [filters, setFilters] = useState(false);
  const [search, setHandleSearch] = useState("");
  const [tegSearch, setHandleTegSearch] = useState("");
  const [authorSearch, setHandleAuthorSearch] = useState("");

  const addNews = (newNews) => {
    console.log("-----------------", newNews);
    setAddNews([newNews, ...items]);
  };

  const removeMovie = (newsID) => {
    setAddNews(items.filter((news) => news.id !== newsID));
  };

  const addRandomNews = () => {
    addNews(makeNews());
  };

  const handleSearch = (newSearch) => {
    setHandleSearch(newSearch);
  };

  const handleTegSearch = (newSearch) => {
    setHandleTegSearch(newSearch);
  };

  const handleAuthorSearch = (newSearch) => {
    setHandleAuthorSearch(newSearch);
  };

  const filteredNews = items.filter((el) => {
    if (
      el.title.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
      el.description.toLowerCase().indexOf(search.toLowerCase()) < 0 &&
      el.content.toLowerCase().indexOf(search.toLowerCase()) < 0
    )
      return false;

    // if (el.author.toLowerCase().indexOf(authorSearch.toLowerCase()) < 0)
    //   return false;

    // if (
    //   el.hashtag[0].toLowerCase().indexOf(tegSearch.toLowerCase()) < 0 &&
    //   el.hashtag[1].toLowerCase().indexOf(tegSearch.toLowerCase()) < 0
    // ) {
    //   return false;
    // }

    return true;
  });

  return (
    <div className="movies-page">
      <div className="movies-page__list">
        <div className="movies-page__cations">
          <button onClick={addRandomNews}>Add a random news</button>
          <button onClick={() => setEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Add a news"}
          </button>
          <button onClick={() => setFilters(!filters)}>
            {filters ? "Cancel filters" : "Add filters"}
          </button>
        </div>
        {filters && (
          <NewsFilter
            search={search}
            tegSearch={tegSearch}
            authorSearch={authorSearch}
            handleTegSearch={handleTegSearch}
            handleSearch={handleSearch}
            handleAuthorSearch={handleAuthorSearch}
          />
        )}
        {isEditing && <NewsForm onAddNews={addNews} />}
        <NewsList newsList={filteredNews} onRemoveNews={removeMovie} />
      </div>
    </div>
  );
}

export default State;
