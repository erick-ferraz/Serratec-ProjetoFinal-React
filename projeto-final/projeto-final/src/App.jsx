import { useState } from 'react'
import './App.css'
import PaginaPrincipal from './components/PaginaPrincipal'
import PaginaProduto from './components/PaginaProduto';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Carrinho from './components/Carrinho';
import BotaoMenu from './components/BotaoMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        Git
      <BrowserRouter>
        <div className="title"><h1 className="nomeloja">Diógenes Tech-Shop</h1></div>
        <nav className="navbar">
          <Link to="/"><BotaoMenu>Home</BotaoMenu></Link> {" ↔️ "}
          <Link to="/carrinho"><BotaoMenu>Carrinho</BotaoMenu></Link>
        </nav>
        <Switch>
          <Route path="/" component={PaginaPrincipal} exact />
          <Route path="/produtos/:id" component={PaginaProduto} exact />
          <Route path="/carrinho" component={Carrinho} exact />
        </Switch>
      </BrowserRouter>
      <header className="App-header">
      </header>
    </div>
  )
}

export default App
