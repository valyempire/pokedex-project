import React from "react";

/**
 * Imports types
 */
import { PokecardProps } from "./Pokecard.types";

/**
 * Imports styles
 */
import "./Pokecard.css";

/**
 * Defines the API URL
 */
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

/**
 * Displays the component
 */
export const Pokecard: React.FC<PokecardProps> = (props) => {
  const { id, name, type, experience } = props;

  /**
   * Handles padding the id to three digits
   */
  const padToThree = (id: number) => (id <= 999 ? `00${id}`.slice(-3) : id);

  /**
   * Returns the image src
   */
  const getImageSrc = () => {
    return `${POKE_API}${padToThree(id)}.png`;
  };

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={getImageSrc()} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {experience}</div>
    </div>
  );
};
