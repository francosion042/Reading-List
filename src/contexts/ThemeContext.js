import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { sytax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { sytax: "#fff", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeContextProvider;
