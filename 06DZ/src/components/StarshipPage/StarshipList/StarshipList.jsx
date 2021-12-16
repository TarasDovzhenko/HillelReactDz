import React from "react";
import PropTypes from "prop-types";
import StarshipItems from "./StarshipItems/StarshipItems";

class StarshipList extends React.PureComponent {
  state = {
    status: "initial",
    error: null,
    data: null,
    search: false,
    nameShip: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // const { nameShip } = this.state;
    // console.log(nameShip);
    // handleSearch(nameShip);
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value } = input;
    this.setState({
      nameShip: value,
    });
  };

  handleSearch = (id) => {
    fetch(` https://swapi.dev/api/starships/?search=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
  };

  render() {
    const { status, error, data, search, nameShip } = this.state;
    console.log("sddsdfsdfs", data);
    return (
      <div className="starship-list">
        <button onClick={() => this.setState({ search: !search })}>
          {search ? "Cancel search" : "Add search"}
        </button>
        {search && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="filter"
              id=""
              placeholder="Enter search"
              value={nameShip}
              onChange={this.handleChangeText}
            />
            <button>Search</button>
          </form>
        )}
        {status === "loading" || status === "initial" ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error === null ? (
              <div className="ship">
                <ul className="ship-content">
                  {data.results.map((el) => {
                    return (
                      <li className="list-items">
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
