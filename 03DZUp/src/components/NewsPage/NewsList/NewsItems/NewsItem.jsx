import React from "react";

import Categories from "./Categories/Categories";

class NewsItem extends React.Component {
  render() {
    const { el } = this.props;
    return (
      <>
        {el.isSpecial && <div className="is-pecial"> Special!!! </div>}
        <h2>{el.title}</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: el.content,
          }}
        ></div>
        <div className="date">{el.dateCreated}</div>
        <div className="link">
          <a href={el.link}>{el.link}</a>
        </div>
        <div className="photo">{el.photo && <img src={el.photo} alt="" />}</div>
        <div className="author">{el.author}</div>
        <Categories categories={el.categories} />
      </>
    );
  }
}

export default NewsItem;
