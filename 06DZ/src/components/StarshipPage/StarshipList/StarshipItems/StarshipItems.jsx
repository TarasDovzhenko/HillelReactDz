import React from "react";
import PropTypes from "prop-types";
import StarshipFilms from "./StarShipFilms";

class StarshipItems extends React.PureComponent {
  render() {
    const { el } = this.props;
    console.log("DATA", el);
    return (
      <>
        <h3>Name: {el.name}</h3>
        <h5>Model: {el.model}</h5>
        <div>Manufacturer: {el.manufacturer}</div>
        <div>Cost_in_credits: {el.cost_in_credits}</div>
        <div>Length: {el.length}</div>
        <div>Max_atmosphering_speed: {el.max_atmosphering_speed}</div>
        <div>Crew: {el.crew}</div>
        <div>Passengers: {el.passengers}</div>
        <div>Cargo_capacity: {el.cargo_capacity}</div>
        <div>Consumables: {el.consumables}</div>
        <div>Hyperdrive_rating: {el.hyperdrive_rating}</div>
        <div>MGLT: {el.MGLT}</div>
        <div>Starship_class: {el.starship_class}</div>
        <div>Pilots: {el.pilots}</div>
        <div>Created: {el.created}</div>
        <div>Edited: {el.edited}</div>
        <div>
          Url: <a href={el.url}>{el.url}</a>{" "}
        </div>
        <StarshipFilms films={el.films} />

        <hr />
      </>
    );
  }
}

export default StarshipItems;
