import "./pedido.css"
import { useState } from "react";
import {addDoc, collection } from "firebase/firestore";

import { db} from "../../firebaseConnection";

function Pedido(){
    //info user
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");
    const [dataNascimento, setDataNascimento]= useState("");
    const [telefone, setTelefone] = useState("")
    //info address
    const [ruaNumero,setRuaNumero] = useState("");
    const [bairro,setBairro] = useState("")
    //info date
    
    

    async function salvarDados(e){
        try{
            await addDoc(collection(db,"informacao-do-pedido"),{
            bairro: bairro,
            cpf: cpf,
            dataAtual: dataAtual,
            dataNascimento:dataNascimento,
            nome: nome,
            ruaNumero: ruaNumero,
            telefone: telefone,
        })
        e.preventDefault();
        alert("Seu pedido foi enviado e está em processo de análize")
    }catch(error){
        alert("erro ao pedir, tente novamente mais tarde :)")
        console.log(error)
    }}

    
       
        
    return(
        <article className="container">
            <section className="secao-pedido">
                <form className="form">
                <h1>Faça seu pedido de água</h1>

                <h2>Informe seus dados</h2>

                <label>Digite seu nome completo</label>
                <input placeholder="Seu nome completo..."
                autoComplete="name"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}/>

                <label>Digite seu CPF</label>
                <input placeholder="111.222.335-44"
                autoComplete="id"
                value={cpf}
                onChange={(e)=> setCpf(e.target.value)}
                />

                <label>Digite seu número de telefone</label>
                <input placeholder="(79) 9 9969-2447"
                value={telefone}
                onChange={(e)=> setTelefone(e.target.value)}
                />
                

                <label>Digite sua data de nascimento</label>
                <input placeholder=""
                type="date"
                autoComplete="id"
                value={dataNascimento}
                onChange={(e)=> setDataNascimento(e.target.value)}
                />

                <h2>Informe seu endereço</h2>

                <label>Informe qual é sua rua e o número da sua casa</label>
                <input placeholder="Boa Sorte, 89"
                autoComplete="street-address"
                value={ruaNumero}
                onChange={(e)=> setRuaNumero(e.target.value)}
                />

                <label>Informe qual é seu bairro / povoado</label>
                <input placeholder="São José"
                autoComplete="street-address"
                value={bairro}
                onChange={(e)=> setBairro(e.target.value)}
                />

                <button type="button" onClick={salvarDados}>Fazer Pedido</button>
                
            </form>
            </section>
            
            
        </article>
    )
}

export default Pedido;