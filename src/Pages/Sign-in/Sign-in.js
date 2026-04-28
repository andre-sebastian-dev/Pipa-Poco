import "./sign-in.css"
import { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn(){
  const [loginEmail, setLoginEmail] = useState('')
  const [loginSenha, setLoginSenha] = useState('')

async function fazerLogin(){
    await signInWithEmailAndPassword(auth,loginEmail,loginSenha)
    .then((value)=>{
        console.log("login feito com sucesso")
        console.log(value.user)

        setLoginEmail('')
        setLoginSenha('')
    })
    .catch((error)=>{
        if(error.code === "auth/wrong-password"){
            alert("Senha Errada") 
        }else if(error.code ==="auth/user-not-found"){
            alert("Usuário não encontrado")
        }else if(error.code === "auth/invalid-email"){
            alert("Email inválido")
        }
    })
}
    return(
        <article className="container">
        <section className="seção-sign">
            <form className="form-sign">
            <h1>Faça seu login</h1>
            
             <label>Digite seu Email</label>
                    <input 
                        type="email"
                        autoComplete="email"
                        placeholder="Seu email..."
                        value={loginEmail}
                        onChange={(e)=> setLoginEmail(e.target.value)}
                     ></input>

                    <label>Digite sua Senha</label>
                    <input 
                        type="password" 
                        autoComplete="current-password"
                        placeholder="Sua senha..."
                        value={loginSenha}
                        onChange={(e)=> setLoginSenha(e.target.value)}
                    ></input>

                    <div className="buttons">
                       
                       <Link className="cad-button" to="/cadastro">Criar conta</Link>
                       <p className="ou">ou</p>
                       <button type="button" className="log-button" onClick={fazerLogin}>fazer Login</button>
                       
                    </div>
                </form>


        </section>
        </article>
    )
}

export default SignIn;