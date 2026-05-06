import { auth } from "../../firebaseConnection";

import { useSearchParams, useNavigate } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";

import { useState } from "react";

import "./changePassword.css"

function ChangePassword(){

    const [searchParams] = useSearchParams();
    const oobCode = searchParams.get("oobCode");

    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleChange(e){
        e.preventDefault()

        if(!senha){
            alert("Digite uma nova senha");
        }

        if(!oobCode){
            alert("Link inválido ou expirado");
        }
        try{
            await confirmPasswordReset(auth,oobCode,senha);

            alert("Senha alterada com sucesso")
            navigate("/sign-in")
        }
        catch(erro){
            alert("Erro ao alterar senha")
        }

        
    }

    return(
        <div>
            <form>
                <label>Confirme sua nova senha </label>
                <input placeholder="Nova senha"
                type="password"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}></input>

                <button type="submit">Alterar senha</button>
            </form>
        </div>
    )
}

export default ChangePassword;