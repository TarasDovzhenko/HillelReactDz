import React from "react";
import PropTypes from "prop-types";
import StarshipItems from "./StarshipItems/StarshipItems";

class StarshipList extends React.PureComponent {
  state = {
    status: "initial",
    error: null,
    data: null,
  };

  render() {
    const { status, error, data } = this.state;
    console.log("sddsdfsdfs", data);
    return (
      <div className="starship-list">
        {status === "loading" || status === "initial" ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error === null ? (
              <div>
                <ul className="ship">
                  {data.results.map((el) => {
                    return (
                      <li>
                        <StarshipItems key={el.name} el={el} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <span style={{ color: "red" }}>Error</span>
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetch(" https://swapi.dev/api/starships/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          status: "success",
          error: null,
          data: data,
        });
      })
      .catch((err) => {
        this.setState({
          status: "error",
          error: err.massage,
          data: null,
        });
      });
  }
}

export default StarshipList;
