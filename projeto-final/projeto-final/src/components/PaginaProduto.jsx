import React from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from 'react-router-dom'

const api = axios.create({
    baseURL: "http://localhost:8080/projetofinal/",
});

export default (props) => {
    const {id} = useParams();

    const chamadaAPI = (props) => {

        api.get(`/produtos/${id}`).then(pegar);

        function pegar(response) {
            setProdutos(response.data);
        }
    };


    function adicionarProd () {
        function adicionarItemPedido(idLista) {
            api.post('/pedidoitens/adicionar', {
                "pedido": {
                    "id":idLista
                },
                "produto": {
                    "id":id
                },
                "quantidade": 1
            })
        } 

        api.get(`/pedidos`).then((result)=> {

            if (result.data?.length > 0) {
                const pedidoEncontrado = result.data.find((x) => x.cliente?.id == 1);

                if (!pedidoEncontrado) {
                    api.post("/pedidos/adicionar", {
                        "cliente":{
                            "id":1
                        }
                    }).then((newPedido)=> {
                        console.dir(newPedido)});
                        adicionarItemPedido(newPedido.data.id);
                } else {
                    adicionarItemPedido(pedidoEncontrado.id)
                }
            }
        });
    }

    return (
        <div className="pagina-produto">
            <h1>Nome do produto</h1>
            <img src="" alt="" />
            <p>Preço do produto</p>
            <Link to='/carrinho'><button onClick={adicionarProd}>Adicionar ao carrinho</button></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus quas eveniet, at eum id ducimus nisi dicta excepturi hic 
                aliquid dignissimos nam rerum distinctio dolores 
                nesciunt officia et. Doloremque, doloribus.</p>
        </div>
    )
}