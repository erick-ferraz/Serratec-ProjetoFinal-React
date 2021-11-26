import { useState } from 'react'
import './App.css'
import PaginaPrincipal from './components/PaginaPrincipal'
import PaginaProduto from './components/PaginaProduto';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Carrinho from './components/Carrinho';
import Menu from './components/Menu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <div className="title"><h1 className="nomeloja">Diógenes Tech-Shop</h1></div>
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
