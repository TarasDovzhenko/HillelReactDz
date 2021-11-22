import React from "react";

class Imgs extends React.Component {
  render() {
    const { photo } = this.props;
    return <li className="photo">{photo && <img src={photo} alt="" />}</li>;
  }
}

export default Imgs;
