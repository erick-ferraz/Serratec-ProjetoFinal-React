import React, { useState, useEffect } from "react";
import Produto from "./Produto";
import Api from "../Api";

export default () => {
    const [listaProdutos, setProdutos] = React.useState([]);

    const chamadaAPI = () => {
        Api.get("/produtos").then(listar);

        function listar(response) {
            setProdutos(response.data);
        }
    };

    React.useEffect(() => { chamadaAPI() }, [])


    return (
        <div className="PaginaPrincipal">
            <div className="productList">
                {listaProdutos.map((produto) => (
                    <Produto
                        key={produto.id}
                        produto={produto}
                        className="produto"
                    />))}
            </div>
        </div>
    )
}