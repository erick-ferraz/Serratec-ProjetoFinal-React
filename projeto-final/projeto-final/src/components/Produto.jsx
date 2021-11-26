import React from "react";
import PaginaProduto from "./PaginaProduto";
import { Link } from 'react-router-dom'
import BotaoMenu from "./BotaoMenu";

export default (props) => {
    const { produto } = props;

    const handler = (event) => {
        <PaginaProduto produto={produto} />
    }

    return (
        <div className="produto">
            <h3>{produto.nome}</h3>
            <img src={produto.foto} alt="" />
            <p>{produto.descricao}</p>
            <p>Preço: R$ {produto.vlUnitario}</p>
            <Link to={`/produtos/${produto.id}`}><BotaoMenu onClick={handler}>Ver detalhes</BotaoMenu></Link>
        </div>
    )
}