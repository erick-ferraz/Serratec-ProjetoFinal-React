import React, { useEffect } from "react";
import { useParams } from "react-router";
import Api from "../Api";
import { Link } from 'react-router-dom'
import BotaoMenu from "./BotaoMenu";

export default (props) => {
    const { id } = useParams();
    //    const { produto } = props;
    const [produto, setProduto] = React.useState({});
    const [qtd, setQtd] = React.useState(1);

    React.useEffect(() => { buscar() }, [])

    const clienteId = 2;

    function buscar() {
        Api.get(`produtos/${id}`).then(exibir);
    }

    function exibir(response) {
        setProduto(response.data);
    }

    function adicionarProd(event) {
        event.preventDefault();
        alert('Entrou no event')
        function adicionarItemPedido(idLista) {
            Api.post('/pedidoitens/adicionar', {
                "pedido": {
                    "id": idLista
                },
                "produto": {
                    "id": id
                },
                "quantidade": qtd
            }).then(() => window.location.href="/carrinho")
        }

        Api.get(`/pedidos`).then((result) => {

            if (result.data?.length > 0) {
                const pedidoEncontrado = result.data.find((x) => x.cliente?.id == clienteId);

                if (!pedidoEncontrado) {
                    Api.post("/pedidos/adicionar", {
                        "cliente": {
                            "id": clienteId
                        }
                    }).then((newPedido) => {
                        adicionarItemPedido(newPedido.data.id);
                    });
                } else {
                    adicionarItemPedido(pedidoEncontrado.id)
                }
            }
        });
    }

    const handleChange = (event) => setQtd(event.target.value);

    return (
        <div className="pagina-produto">
            <h1>Nome do produto: {produto.nome}</h1>
            <img src="" alt="" />
            <h3>Preço: R$ {produto.vlUnitario * qtd}</h3>
            <Link to='/carrinho'></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quas eveniet, at eum id ducimus nisi dicta excepturi hic
                aliquid dignissimos nam rerum distinctio dolores
                nesciunt officia et. Doloremque, doloribus.</p>

            <form onSubmit={adicionarProd}>
                <label className='label'>Quantidade</label>
                <input className="input" type="number" value={qtd} onChange={handleChange} min="0"/>
                <BotaoMenu type="submit">Adicionar ao carrinho</BotaoMenu>
            </form>
        </div>
    )
}