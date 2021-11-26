import React from "react";
import BotaoMenu from "./BotaoMenu";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

      manipulador = () => {
        this.setState(novo);
      };

      render() {
        return (
          <nav className="navbar">
          <Link to="/"><BotaoMenu>Home</BotaoMenu></Link> {" ↔️ "}
          <Link to="/carrinho"><BotaoMenu>Seu carrinho</BotaoMenu></Link>
          </nav>
        )
      }
}

export default Menu;