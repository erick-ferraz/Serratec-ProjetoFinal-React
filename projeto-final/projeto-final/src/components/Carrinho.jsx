import React from "react";
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/projetofinal/",
});

export default (props) => {
    const [ItensPedido, setItensPedido] = React.useState([]);

    React.useEffect(() => { chamadaAPI() }, [])

    const chamadaAPI = (props) => {

        api.get(`/pedidos`).then((result)=> {

            if (result.data?.length > 0) {
                const pedidoEncontrado = result.data.find((pedido) => pedido.cliente?.id == 1);
                if (pedidoEncontrado) {
                    setItensPedido(pedidoEncontrado.itensPedido);
                }
            }
        })

    };

    return (
        <div>
            {ItensPedido.length > 0 && <h3>Itens no carrinho: {ItensPedido.length}</h3>}
            {ItensPedido.length == 0 && <h3>Seu carrinho está vazio</h3>}
            <div className="carrinho">
                <p>Produtos: </p>
                <ul>
                {ItensPedido.map((itemPedido) => (
                    <li>Nome do produto: {itemPedido.produto.nome} - Preço R$ {itemPedido.produto.vlUnitario}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}