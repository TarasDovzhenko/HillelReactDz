import React from "react";
import State from "../PageState";

class NewsFilter extends React.Component {
  render() {
    let { photo, link, special, handlerPhoto, handlerLink, handlerSpecial } =
      this.props;

    return (
      <div className="checkboxes">
        <div className="checkbox-photo">
          <label htmlFor="news-photo">news with photo</label>
          <input
            type="checkbox"
            name="photo"
            id="news-photo"
            value="photo"
            onChange={() => handlerPhoto(!photo)}
            checked={photo}
          />
        </div>

        <div className="checkbox-link">
          <label htmlFor="news-link">news with link</label>
          <input
            type="checkbox"
            name="link"
            id="news-link"
            value="link"
            onChange={() => handlerLink(!link)}
            checked={link}
          />
        </div>

        <div className="checkbox-special">
          <label htmlFor="news-special">news special</label>

          <input
            type="checkbox"
            name="special"
            id="news-special"
            value="special"
            onChange={() => handlerSpecial(!special)}
            checked={special}
          />
        </div>
      </div>
    );
  }
}

export default NewsFilter;
