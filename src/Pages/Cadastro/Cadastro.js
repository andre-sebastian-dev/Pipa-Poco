//import do estilo
import "./cadastro.css"

// import das hooks
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import firebase toos
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword,
         updateProfile,
         sendEmailVerification,
         signOut  } from "firebase/auth";


function Cadastro(){
    const [nome,setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    

  async function cadastrarUsuario() {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

    await updateProfile(userCredential.user, {
      displayName: `${nome} ${sobrenome}`
    });

    await sendEmailVerification(userCredential.user);

    await signOut(auth)

    alert("Conta criada verifique seu email antes de fazer login.");

    setEmail('');
    setSenha('');
    setNome('');
    setSobrenome('');

    navigate("/sign-in")

  } catch (error) {
    if (error.code === 'auth/weak-password') {
      alert("senha muito fraca.");
    } else if (error.code === 'auth/email-already-in-use') {
      alert("Já existe uma conta com esse email");
    } else if (error.code === 'auth/invalid-email') {
      alert("email inválido");
    } else {
      alert("Erro ao cadastrar");
      console.log(error);
    }
  }
}

    return(
        <article className="container">
            <section className="seção">
                <form className="form">
                    <h1>Crie Sua conta</h1>

                    <label>Digite seu Nome</label>
                    <input 
                        placeholder="Seu nome..."
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}>
                    </input>

                    <label>Digite seu sobrenome</label>
                    <input
                        placeholder="Seu sobrenome..."
                        value={sobrenome}
                        onChange={(e)=> setSobrenome(e.target.value)}>
                    </input>

                    <label>Digite seu Email</label>
                    <input 
                        type="email"
                        autoComplete="username"
                        placeholder="Seu email..."
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                     ></input>

                    <label>Crie sua Senha</label>
                    <input 
                        type="password" 
                        autoComplete="new-password"
                        placeholder="sua senha..."
                        value={senha}
                        onChange={(e)=> setSenha(e.target.value)}
                    ></input>

                    <div className="buttons">
                       <Link className="go-signIn" to="/sign-in">Fazer login</Link>
                       <p className="ou">ou</p>
                       <button type="button" className="button-cad" onClick={cadastrarUsuario}>Criar conta</button>
                    </div>

                </form>

                <div className="quadro-direito-cadastro"></div>
            </section>
        </article>
    )
}

export default Cadastro;
