import React from "react";
import PaginaProduto from "./PaginaProduto";
import { Link } from 'react-router-dom'

export default (props) => {
    const { produto } = props;

    const handler = (event) => {
        
    }

    return (
        <div className="produto">
            <h3>{produto.nome}</h3>
            <img src="" alt="" />
            <p>{produto.descricao}</p>
            <p>{produto.vlUnitario}</p>
            <Link to={`/produtos/${produto.id}`}><button onClick={handler}>Ver detalhes</button></Link>
        </div>
    )
}