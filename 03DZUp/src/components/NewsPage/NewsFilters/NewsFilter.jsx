import React from "react";
import State from "../PageState";

class NewsFilter extends React.Component {
  render() {
    let { options, onChange } = this.props;

    return (
      <div className="checkboxes">
        <div className="checkbox-photo">
          <label htmlFor="news-photo">news with photo</label>
          <input
            type="checkbox"
            name="photo"
            id="news-photo"
            value="photo"
            onChange={onChange}
          />
        </div>

        <div className="checkbox-link">
          <label htmlFor="news-link">news with link</label>
          <input type="checkbox" name="link" id="news-link" value="link" />
        </div>

        <div className="checkbox-special">
          <label htmlFor="news-special">news special</label>

          <input
            type="checkbox"
            name="special"
            id="news-special"
            value="special"
          />
        </div>
      </div>
    );
  }
}

export default NewsFilter;
