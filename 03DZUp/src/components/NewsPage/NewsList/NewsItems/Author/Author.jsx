import React from "react";

class Author extends React.Component {
  render() {
    const { author } = this.props;
    return <li className="author">{author}</li>;
  }
}

export default Author;
