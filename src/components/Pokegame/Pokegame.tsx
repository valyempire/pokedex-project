import React, { useState, useEffect } from "react";

/**
 * Imports components
 */
import { Pokedex } from "../Pokedex";

/**
 * Imports types
 */
import { Pokemon } from "../../types";

/**
 * Defines the pokemons data
 */
const pokemons: Pokemon[] = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
];

/**
 * Displays the component
 */
export const Pokegame: React.FC = () => {
  /**
   * Initializes the first hand
   */
  const [hand1, setHand1] = useState<Pokemon[]>([]);

  /**
   * Initializes the second hand
   */
  const [hand2, setHand2] = useState<Pokemon[]>([]);

  /**
   * Handles equalizing the hands with pokemons
   */
  const fillHandsWithPokemons = () => {
    const hand1 = [];
    const hand2 = [...pokemons];

    while (hand1.length < hand2.length) {
      const randomIndex = Math.floor(Math.random() * hand2.length);
      const randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    setHand1(hand1);
    setHand2(hand2);
  };

  /**
   * Calculates the total experience of the cards of the provided hand
   */
  const calculateExperience = (hand: Pokemon[]) => {
    return hand.reduce((experience, pokemon) => {
      return experience + pokemon.base_experience;
    }, 0);
  };

  /**
   * Handles checking which hand is the winner
   */
  const checkWinner = (hand?: "hand1" | "hand2") => {
    const hand1Experience = calculateExperience(hand1);
    const hand2Experience = calculateExperience(hand2);

    return hand1Experience > hand2Experience ? "hand1" : "hand2";
  };

  /**
   * When the component mounts, we'll initialize the hands
   */
  useEffect(() => {
    fillHandsWithPokemons();
  }, []);

  return (
    <div>
      <Pokedex
        pokemons={hand1}
        experience={calculateExperience(hand1)}
        isWinner={checkWinner() === "hand1"}
      />
      <Pokedex
        pokemons={hand2}
        experience={calculateExperience(hand2)}
        isWinner={checkWinner() === "hand2"}
      />
    </div>
  );
};
