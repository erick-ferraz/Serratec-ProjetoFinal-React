import React, { useState, useEffect } from "react";
import Produto from "./Produto";
import axios from 'axios';

export default () => {
    const [listaProdutos, setProdutos] = React.useState([]);

    const chamadaAPI = () => {
        const api = axios.create({
            baseURL: "http://localhost:8080/projetofinal/",
        });

        api.get("/produtos").then(listar);

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