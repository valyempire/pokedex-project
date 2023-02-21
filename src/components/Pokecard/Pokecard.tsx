import React from "react";

/**
 * Imports types
 */
import { PokecardProps } from "./Pokecard.types";

/**
 * Imports styled components
 */
import {
  PokecardData,
  PokecardImage,
  PokecardTitle,
  PokecardContainer,
  PokecardImageContainer
} from "./Pokecard.styles";

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
    <PokecardContainer>
      <PokecardTitle>{name}</PokecardTitle>
      <PokecardImageContainer>
        <PokecardImage src={getImageSrc()} alt={name} />
      </PokecardImageContainer>
      <PokecardData>Type: {type}</PokecardData>
      <PokecardData>EXP: {experience}</PokecardData>
    </PokecardContainer>
  );
};
