import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { algum: estado };
      }

      manipulador = () => {
        let novo = {
          contador: this.state.contador + 1,
        };
        this.setState(novo);
      };

      render() {
        return <h1>Teste</h1>
      }
}