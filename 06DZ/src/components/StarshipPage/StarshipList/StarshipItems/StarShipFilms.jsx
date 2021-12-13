import React from "react";
import PropTypes, { array } from "prop-types";

class StarshipFilms extends React.PureComponent {
  render() {
    const { films } = this.props;

    return (
      <>
        {films && (
          <li className="films">
            {films.map((el, i) => {
              return (
                <div key={el.i}>
                  <div>
                    Films: <a href={films}>{films}</a>
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

export default StarshipFilms;
