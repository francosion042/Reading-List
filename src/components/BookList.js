import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}>
              <ul>
                <li style={{ background: theme.ui }}>List item one</li>
                <li style={{ background: theme.ui }}>List item one</li>
                <li style={{ background: theme.ui }}>List item one</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
