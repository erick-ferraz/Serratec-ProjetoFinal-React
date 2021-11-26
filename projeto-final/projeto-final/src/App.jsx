import { useState } from 'react'
import './App.css'
import PaginaPrincipal from './components/PaginaPrincipal'
import PaginaProduto from './components/PaginaProduto';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Carrinho from './components/Carrinho';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav className="navbar">
        
      </nav>
      <div className="title">Loja do Diógenes</div>
      <BrowserRouter>
        <Link to="/"></Link>
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
