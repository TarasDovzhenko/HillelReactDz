import React from "react";

class Titles extends React.Component {
  render() {
    const { title } = this.props;
    return <li className="titles">{title}</li>;
  }
}

export default Titles;
