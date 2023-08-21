import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = 'Ferrari' ano_lancamento={1985}/>
                <Item marca = 'Astom Martin' ano_lancamento={1979}/>
                <Item marca = 'Porsche' ano_lancamento={1989}/>
            </ul>
        </>

    )
}

export default List