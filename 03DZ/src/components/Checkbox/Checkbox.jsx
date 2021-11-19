import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <>
        <div className="checkbox-photo">
          <label htmlFor="news-photo">news with photo</label>
          <input type="checkbox" name="photo" id="news-photo" />
        </div>

        <div className="checkbox-link">
          <label htmlFor="news-link">news with link</label>
          <input type="checkbox" name="link" id="news-link" />
        </div>

        <div className="checkbox-special">
          <label htmlFor="news-special">news special</label>

          <input type="checkbox" name="special" id="news-special" />
        </div>
      </>
    );
  }
}

export default Checkbox;
