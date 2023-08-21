import { useState } from "react";

function Condicional(){

    const [email,setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
       
    }

    function limparEmail (){
        setUserEmail('')

    }

    return(
        <div>
            <h2>Informe seu E-mail</h2>
            <form>
                <input 
                type='email' 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional;