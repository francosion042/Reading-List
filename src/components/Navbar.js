import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div>
        <nav style={{ background: theme.ui, color: theme.syntax }}>
          <h1>Reading List App</h1>
        </nav>
      </div>
    );
  }
}
