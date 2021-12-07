import React from "react";
import { AUTHOR, HASHTAGS } from "../../../../data/data";

class NewsItem extends React.Component {
  render() {
    const {
      el: { id, title, description, content, hashtag, photo, author },
      onRemoveNews,
    } = this.props;

    const authorData = AUTHOR.find((el) => el.id === author);

    return (
      <>
        <h1>{title}</h1>
        <div>
          <img
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
            }}
            src={photo}
            alt={title}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p>{content}</p>
        <div>
          <b>Author: </b>
          {authorData.name}
        </div>
      </>
    );
  }
}

export default NewsItem;
