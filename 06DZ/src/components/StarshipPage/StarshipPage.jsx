import React from "react";
import PropTypes from "prop-types";
import StarshipList from "./StarshipList/StarshipList";

class StarshipPage extends React.PureComponent {
  render() {
    return (
      <div>
        <StarshipList />
      </div>
    );
  }
}

export default StarshipPage;
