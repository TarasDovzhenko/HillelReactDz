import React from "react";
import PropTypes, { array } from "prop-types";

class StarshipPilots extends React.PureComponent {
  render() {
    const { pilots } = this.props;

    return (
      <>
        {pilots && (
          <li className="pilots">
            {pilots.map((el, i) => {
              return (
                <div key={el.i}>
                  <div>
                    Pilots: <a href={pilots}>{pilots}</a>
                  </div>
                </div>
              );
            })}
          </li>
        )}
      </>
    );
  }
}

export default StarshipPilots;
