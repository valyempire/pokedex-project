import React from "react";

/**
 * External imports
 */
import clsx from "clsx";

/**
 * Imports components
 */
import { Pokecard } from "../Pokecard";

/**
 * Imports types
 */
import { PokedexProps } from "./Pokedex.types";

/**
 * Imports styles
 */
import "./Pokedex.css";

/**
 * Displays the component
 */
export const Pokedex: React.FC<PokedexProps> = (props) => {
  const { pokemons, isWinner, experience } = props;

  /**
   * Defines the titel class name
   */
  const titleClassName = clsx({
    "Pokedex-winner": isWinner,
    "Pokedex-loser": !isWinner
  });

  return (
    <div className="Pokedex">
      <h1 className={titleClassName}>
        {isWinner ? "Winning Hand" : "Losing Hand"}
      </h1>
      <h4>Total Experience: {experience}</h4>
      <div className="Pokedex-cards">
        {pokemons.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            experience={p.base_experience}
            key={p.id}
          />
        ))}
      </div>
    </div>
  );
};
