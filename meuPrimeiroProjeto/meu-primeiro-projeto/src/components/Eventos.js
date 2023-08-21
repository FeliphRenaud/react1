import Button from "./eventos/Button";

function Eventos (){

    function meuEvento(){
        console.log('Ativando Primeiro Evento');
    }

    function segundoEvento(){
        console.log('Arivando o segundo evento ');
    }

    return(
        <div>
            <p>Clique para disparar o meu evento</p>
            <Button event={meuEvento} text='Primeiro' />
            <Button event={segundoEvento} text='Segundo Evento' />
        </div>
    )
}

export default Eventos;