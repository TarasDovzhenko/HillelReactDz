import React from "react";
import PropTypes from "prop-types";
import { AUTHOR, HASHTAGS } from "../../../../data/data";

class NewsItem extends React.Component {
  render() {
    const {
      el: { id, title, description, content, hashtag, photo, author },
      onRemoveNews,
    } = this.props;

    const hashtagData = HASHTAGS.filter((srcHashtag) => {
      return hashtag.indexOf(srcHashtag.value) !== -1;
    });

    return (
      <>
        <h1>{title}</h1>

        <div>
          {photo.length > 0 && (
            <img
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
              }}
              src={photo}
              alt={title}
            />
          )}
        </div>
        {description && (
          <div
            className="descrip"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {content && <p className="content">{content}</p>}
        <div>
          <b>Author: </b>
          {author}
        </div>
        <div>
          <b>Hashtag: </b>
          {hashtagData.map((el) => el.value).join(", ")}
        </div>
        <div>
          <button onClick={() => onRemoveNews(id)}>Delete News</button>
        </div>
        <hr />
      </>
    );
  }
}

export default NewsItem;

NewsItem.propTypes = {
  el: PropTypes.object,
  onRemoveNews: PropTypes.func.isRequired,
};

NewsItem.defaultProps = {};
