import React from "react";

class Date extends React.Component {
  render() {
    const { date } = this.props;
    return <li className="date">{date}</li>;
  }
}

export default Date;
