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

NewsFilter.propTypes = {
  search: PropTypes.string.isRequired,
  tegSearch: PropTypes.string.isRequired,
  authorSearch: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleTegSearch: PropTypes.func.isRequired,
  handleAuthorSearch: PropTypes.func.isRequired,
};

NewsFilter.defaultProps = {};
