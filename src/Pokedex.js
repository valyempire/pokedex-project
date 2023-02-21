import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import clsx from "clsx";

class Pokedex extends Component {
  render() {
    const titleClassName = clsx({
      "Pokedex-winner": this.props.isWinner,
      "Pokedex-loser": !this.props.isWinner,
    });
    // sa instalam libraria clsx
    return (
      <div className="Pokedex">
        <h1 className={titleClassName}>
          {this.props.isWinner ? "Winning Hand" : "Losing Hand"}
        </h1>
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
              key={p.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
