import React from "react";

/**
 * Imports components
 */
import { Pokecard } from "../Pokecard";

/**
 * Imports types
 */
import { PokedexProps } from "./Pokedex.types";

/**
 * Imports styled components
 */
import { Title, Container, Experience, PokedexCards } from "./Pokedex.styles";

/**
 * Displays the component
 */
export const Pokedex: React.FC<PokedexProps> = (props) => {
  const { pokemons, isWinner, experience } = props;

  return (
    <Container className="Pokedex-container">
      <Title className="Pokedex-title" isWinner={isWinner}>
        {isWinner ? "Winning Hand" : "Losing Hand"}
      </Title>
      <Experience className="Pokedex-experience">
        Total Experience: {experience}
      </Experience>
      <PokedexCards className="Pokedex-cards">
        {pokemons.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            experience={p.base_experience}
            key={p.id}
          />
        ))}
      </PokedexCards>
    </Container>
  );
};
