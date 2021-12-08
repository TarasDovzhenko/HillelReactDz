import React from "react";

import PropTypes from "prop-types";

class NewsFilter extends React.Component {
  handleSearch = (e) => {
    let { handleSearch } = this.props;
    let { currentTarget } = e;
    handleSearch(currentTarget.value);
  };

  handleTegSearch = (e) => {
    let { handleTegSearch } = this.props;
    let { currentTarget } = e;
    handleTegSearch(currentTarget.value);
  };

  handleAuthorSearch = (e) => {
    let { handleAuthorSearch } = this.props;
    let { currentTarget } = e;
    handleAuthorSearch(currentTarget.value);
  };

  render() {
    let { search, tegSearch, authorSearch } = this.props;

    return (
      <div className="news-filters">
        <form className="form-filters" action="">
          <input
            type="text"
            placeholder="text"
            value={search}
            onChange={this.handleSearch}
          />
          <input
            type="text"
            value={tegSearch}
            onChange={this.handleTegSearch}
            placeholder="hashtag"
          />
          <input
            type="text"
            value={authorSearch}
            onChange={this.handleAuthorSearch}
            placeholder="author"
          />
        </form>
      </div>
    );
  }
}

export default NewsFilter;

// NewsFilter.propTypes = {
//   photo: PropTypes.bool.isRequired,
//   link: PropTypes.bool.isRequired,
//   special: PropTypes.bool.isRequired,
//   handlerPhoto: PropTypes.func.isRequired,
//   handlerLink: PropTypes.func.isRequired,
//   handlerSpecial: PropTypes.func.isRequired,
// };

// NewsFilter.defaultProps = {};
