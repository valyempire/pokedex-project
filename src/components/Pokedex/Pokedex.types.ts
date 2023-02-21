/**
 * Imports types
 */
import { Pokemon } from "../../types";

/**
 * Defines the component props interface
 */
export interface PokedexProps {
  pokemons: Pokemon[];
  experience: number;
  isWinner: boolean;
}
