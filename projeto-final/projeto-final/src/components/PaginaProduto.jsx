import React, { useEffect } from "react";
import { useParams } from "react-router";
import Api from "../Api";
import { Link } from 'react-router-dom'
import BotaoMenu from "./BotaoMenu";

export default (props) => {
    const {id} = useParams();
//    const { produto } = props;
    const [produto, setProduto] = React.useState({});

    React.useEffect(() => { buscar() }, [])

    function buscar() {
        Api.get(`produtos/${id}`).then(exibir);
    }

    function exibir(response) {
        setProduto(response.data);
    }

    function adicionarProd () {
        function adicionarItemPedido(idLista) {
            Api.post('/pedidoitens/adicionar', {
                "pedido": {
                    "id":idLista
                },
                "produto": {
                    "id":id
                },
                "quantidade": 1
            })
        } 

        Api.get(`/pedidos`).then((result)=> {

            if (result.data?.length > 0) {
                const pedidoEncontrado = result.data.find((x) => x.cliente?.id == 1);

                if (!pedidoEncontrado) {
                    Api.post("/pedidos/adicionar", {
                        "cliente":{
                            "id":1
                        }
                    }).then((newPedido)=> {
                        adicionarItemPedido(newPedido.data.id);
                    });
                } else {
                    adicionarItemPedido(pedidoEncontrado.id)
                }
            }
        });
    }

    return (
        <div className="pagina-produto">
            <h1>Nome do produto: {produto.nome}</h1>
            <img src="" alt="" />
            <h3>Preço: R$ {produto.vlUnitario}</h3>
            <Link to='/carrinho'><BotaoMenu onClick={adicionarProd}>Adicionar ao carrinho</BotaoMenu></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus quas eveniet, at eum id ducimus nisi dicta excepturi hic 
                aliquid dignissimos nam rerum distinctio dolores 
                nesciunt officia et. Doloremque, doloribus.</p>
        </div>
    )
}