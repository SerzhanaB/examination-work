import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class NavBar extends Component {
  state = {
    cards: ["Мои карточки", "Материалы", "Обратная связь", "Обращения"],
  };

  render() {
    return (
      /* <ul>
        {this.state.cards.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>*/
      <div>
        <p>
          <a href="/"> Мои карточки</a>
        </p>
        <p>
          <a href="/materials">Материалы</a>
        </p>
        <p>
          <a href="/feedback">Обратная связь</a>
        </p>
        <p>
          <a href="/issues">Обращения</a>
        </p>
      </div>
    );
  }
}

export default NavBar;
