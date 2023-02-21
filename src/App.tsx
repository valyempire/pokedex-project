import React from "react";

/**
 * Imports components
 */
import { Pokegame } from "./components/Pokegame";

/**
 * Imports styles
 */
import "./App.css";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <div className="App">
      <Pokegame />
    </div>
  );
};
