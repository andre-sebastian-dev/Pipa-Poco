
import "./conta.css";
import { auth, db } from "../../firebaseConnection";

import {
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Conta() {

  const [user, setUser] = useState(undefined);
  const [pedidoAtual, setPedidoAtual] = useState(null);
  const [historicoPedidos, setHistoricoPedidos] = useState([])

  const etapas = [
    "Em análise",
    "Em preparo",
    "A caminho",
    "Entregue"
  ];

  const statusMap = {
    em_analise: 0,
    em_preparo: 1,
    a_caminho: 2,
    entregue: 3
  };

  useEffect(() => {

    const cancelarInscricao = onAuthStateChanged(
      auth,
      (usuario) => {
        setUser(usuario);
      }
    );

    return () => cancelarInscricao();

  }, []);

  useEffect(() => {

    async function buscarPedido() {

      try {

        const q = query(
          collection(db, "informacao-do-pedido"),
          where("email", "==", user.email)
        );

        const snapshot = await getDocs(q);

        const listaPedidos = [];

        snapshot.forEach((doc) => {

          listaPedidos.push({
            id: doc.id,
            ...doc.data()
          });

        });

        const pedidoEmAndamento = listaPedidos.find(
          pedido => pedido.status !== "entregue"
        );

        const historico = listaPedidos.filter(
          pedido => pedido.status === "entregue"
        );

        setPedidoAtual(pedidoEmAndamento || null);
        setHistoricoPedidos(historico)

      } catch (error) {

        console.log(error);

      }

    }

    if (user?.email) {
      buscarPedido();
    }

  }, [user]);

  function sairDaConta() {

    signOut(auth)
      .then(() => {
        alert("Você saiu da sua conta");
      })
      .catch(() => {
        alert("Falha ao sair");
      });

  }

  if (user === undefined) {
    return <p>Carregando...</p>;
  }

  if (user === null) {
    return (
      <div>
        <p>Você não está logado</p>
        <Link to="/sign-in">Fazer login</Link>
      </div>
    );
  }

  const statusAtual = pedidoAtual
    ? statusMap[pedidoAtual.status]
    : 0;

  return (

    <article className="container-conta">

      <section className="user-info">
        <h1>Sua Conta</h1>

        <p>
          Bem-vindo {user.displayName}
        </p>

        <p>
          Email: {user.email}
        </p>
      </section>

      {pedidoAtual && (

        <section className="pedido-info">

          
        <div className="acompanhamento-pedido">
            <h2>Acompanhamento do pedido</h2>
          <div className="barra-status">            

            {etapas.map((etapa, index) => (

              <div
                className="etapa-box"
                key={index}
              >
                <div
                  className={
                    index <= statusAtual
                      ? "circulo ativo"
                      : "circulo"
                  }
                >
                  ✓
                </div>

                <span>{etapa}</span>

              </div>

            ))}

          </div>
        </div>

          <div className="dados-pedido">

            <p>
                <strong>Nome:</strong> {pedidoAtual.nome}
            </p>
            <p>
              <strong>Data:</strong> {pedidoAtual.dataPedido}
            </p>
            <p>
              <strong>Bairro:</strong> {pedidoAtual.bairro}
            </p>
            <p>
              <strong>Endereço:</strong> {pedidoAtual.ruaNumero}
            </p>
          </div>

        </section>

      )}

      <section className="historico-pedidos">

        <h2>Histórico de pedidos</h2>

        {historicoPedidos.length === 0 ?(
          <p>
            Nenhum pedido finalizado.
          </p>
        ) : (
          historicoPedidos.map((pedido) =>(
            <div className="card-histórico"
            key={pedido.id}>
              <p>
                <strong>Nome:</strong> {pedido.nome}
              </p>
              <p>
                <strong>Data:</strong> {pedido.dataPedido}
              </p>
              <p>
                <strong>Bairro:</strong> {pedido.bairro}
              </p>
              <p>
                <strong>Endereço:</strong> {pedido.ruaNumero}
              </p>
              <p>
                <strong>Status:</strong> {pedido.status}
              </p>

            </div>
          ))
        )}

      </section>

      <section className="hendle-conta">

        <button onClick={sairDaConta}>
          Sair da conta
        </button>

        <Link to="/sign-in">
          Trocar de conta
        </Link>

      </section>

    </article>

  );
}

export default Conta;