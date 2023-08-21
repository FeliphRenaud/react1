function SeuNome({setnome}){
    return(
        <div>
           <p>Digite seu nome </p>
           <input 
           type="text" 
           placeholder="Qual é o seu nome"
           onChange={(e)=> setnome(e.target.value)}
           /> 
        </div>
    )
}

export default SeuNome;