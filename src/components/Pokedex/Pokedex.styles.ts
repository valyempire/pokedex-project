/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports types
 */
import { TitleProps } from "./Pokedex.types";

/**
 * Styles the title
 */
export const Title = styled("h1", {
  shouldForwardProp: (propName) => propName !== "isWinner"
})<TitleProps>((props) => {
  const { isWinner } = props;

  return {
    color: isWinner ? "#4caf50" : "#e91e63"
  };
});

/**
 * Styles the container
 */
export const Container = styled("div")(() => {
  return {
    textAlign: "center"
  };
});

/**
 * Styles the Experience
 */
export const Experience = styled("h4")(() => {
  return {
    color: "blue",
    fontSize: "1.5rem"
  };
});

/**
 * Styles the PokedexCards
 */
export const PokedexCards = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  };
});
