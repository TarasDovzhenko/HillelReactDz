import React from "react";
import State from "../PageState";
import PropTypes from "prop-types";

class NewsFilter extends React.Component {
  handleSearch = (e) => {
    let { handleSearch } = this.props;
    let { currentTarget } = e;
    handleSearch(currentTarget.value);
  };
  render() {
    let {
      photo,
      link,
      special,
      handlerPhoto,
      handlerLink,
      handlerSpecial,
      search,
    } = this.props;

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
        <div className="search">
          <label htmlFor="search-text">search text in title</label>
          <input
            type="text"
            id="search-text"
            value={search}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default NewsFilter;

NewsFilter.propTypes = {
  search: PropTypes.string.isRequired,
  photo: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  special: PropTypes.bool.isRequired,
  handlerPhoto: PropTypes.func.isRequired,
  handlerLink: PropTypes.func.isRequired,
  handlerSpecial: PropTypes.func.isRequired,
};

NewsFilter.defaultProps = {};
