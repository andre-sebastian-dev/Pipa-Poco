import "./pedido.css"
import { useState } from "react";
import {addDoc, collection } from "firebase/firestore";

import { auth, db} from "../../firebaseConnection";

function Pedido(){
    //info user
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");

    const [dataNascimento, setDataNascimento]= useState("");
    const [year,month,day] = dataNascimento.split("-");  
    const dataBrasil = `${day}/${month}/${year}`
     
    const [telefone, setTelefone] = useState("")
    //info address
    const [ruaNumero,setRuaNumero] = useState("");
    const [bairro,setBairro] = useState("")
    //info date
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2,"0");
    const mes = String(dataAtual.getMonth() +1).padStart(2, "0");
    const ano = String(dataAtual.getFullYear());
    const dataModificada = `${dia}/${mes}/${ano}`;

    

     function validarCPF(cpf){

        // remove pontos e traços
        cpf = cpf.replace(/[^\d]+/g, '');
        // verifica tamanho
        if(cpf.length !== 11){
            return false;
        }
        // bloqueia CPFs iguais
        if(/^(\d)\1+$/.test(cpf)){
            return false;
        }

        let soma = 0;
        let resto;

        // PRIMEIRO DÍGITO
        for(let i = 0; i < 9; i++){
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        resto = (soma * 10) % 11;
        if(resto === 10 || resto === 11){
            resto = 0;
        }
        if(resto !== parseInt(cpf.charAt(9))){
            return false;
        }

        // SEGUNDO DÍGITO
        soma = 0;

        for(let i = 0; i < 10; i++){
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if(resto === 10 || resto === 11){
            resto = 0;
        }
        if(resto !== parseInt(cpf.charAt(10))){
            return false;
        }
        return true;

    }

    // MÁSCARA CPF
    function mascaraCPF(valor){

        return valor
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    }

    // INPUT CPF
    function handleCpf(e){

        const valorFormatado = mascaraCPF(e.target.value);

        setCpf(valorFormatado);

    }

    async function salvarDados(e){
        try{
            e.preventDefault();

              // valida campos vazios
        if(
            !nome ||
            !cpf ||
            !telefone ||
            !dataNascimento ||
            !ruaNumero ||
            !bairro
        ){
            alert("Preencha todos os campos");
            return;
        }

        // valida CPF
        if(!validarCPF(cpf)){

            alert("CPF inválido");
            return;
        }
            await addDoc(collection(db,"informacao-do-pedido"),{
            bairro: bairro,
            cpf: cpf,
            dataPedido: dataModificada,
            dataNascimento:dataBrasil,
            email: auth.currentUser.email,
            nome: nome,
            ruaNumero: ruaNumero,
            telefone: telefone,
        })
        
        alert("Seu pedido foi enviado e está em processo de análize")
    }catch(error){
        alert("erro ao pedir, tente novamente mais tarde :)")
        console.log(error)
    }}

    
       
        
    return(
        <article className="container-pedido">
            <section className="secao-pedido">
                <form className="form-pedido" onSubmit={salvarDados}>
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
                onChange={(e)=> handleCpf(e)}
                maxLength={14}
                />

                <label>Digite seu número de telefone</label>
                <input placeholder="(79) 9 9969-2447"
                value={telefone}
                onChange={(e)=> setTelefone(e.target.value)}
                />
                

                <label>Digite sua data de nascimento</label>
                <input className="input-data"
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

                <button>Fazer Pedido</button>
                
            </form>
            </section>
            <div className="quadro-azul">
             

            </div>
            
            
        </article>
    )
}

export default Pedido;