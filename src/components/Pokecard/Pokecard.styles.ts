/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Pokecard
 */
export const PokecardContainer = styled("div")(() => {
  return {
    width: 300,
    padding: 10,
    margin: "1rem",
    boxShadow: "7px 10px 12px -5px rgba(0, 0, 0, 0.56);",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 3
  };
});

/**
 * Styles the Pokecard title
 */
export const PokecardTitle = styled("h1")(() => {
  return {
    marginBottom: "1rem",
    fontWeight: "bold",
    fontSize: "1.5rem"
  };
});

/**
 * Styles the Pokecard Image container
 */
export const PokecardImageContainer = styled("div")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    backgroundColor: "#eceff1",
    borderRadius: 3,
    marginBottom: "1rem",
    "& img": {
      transition: "all ease 500ms",
      "&:hover": {
        transform: "scale(1.25)",
        opacity: 0.7
      }
    }
  };
});

/**
 * Styles the Pokecard Image
 */
export const PokecardImage = styled("img")(() => {
  return {
    transition: "all ease 500ms",
    "&:hover": {
      transform: "scale(1.25)",
      opacity: 0.7
    }
  };
});

/**
 * Styles the Pokecard Data
 */
export const PokecardData = styled("div")(() => {
  return {
    fontSize: "80%"
  };
});
