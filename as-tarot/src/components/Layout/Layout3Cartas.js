import { useState } from 'react';
import { Link } from 'react-router-dom'



function Layout3Cards() {
    const [layoutName, setLayoutName] = useState('layout3Cards')
    const [cardOne, setCardOne] = useState('')
    const [cardTwo, setCardTwo] = useState('')
    const [cardThree, setCardThree] = useState('')
    const [spread, setSpread] = useState([{}])

    function handleAdd() {
        const prevSpread = [...spread]
        setSpread(prevSpread + [{name:layoutName, one: cardOne, two: cardTwo, three: cardThree}])
        
        return
    }
    
    console.log(spread[])
    

    


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='one'>Primeira carta: Passado </label>
                <input 
                    value={cardOne}
                    onChange={(e) => setCardOne(e.target.value)}
                />
            </form>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='two'>Segunda carta: Presente </label>
                <input 
                    value={cardTwo}
                    onChange={(e) => setCardTwo(e.target.value)}
                />
            </form>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='three'>Terceira carta: Futuro </label>
                <input 
                    value={cardThree}
                    onChange={(e) => setCardThree(e.target.value)}
                />
            </form>

            <button onClick={handleAdd}>Salvar Tiragem!</button>
            <br/>
            <Link className='btn btn-outline-warning' to='/home'>Home</Link>


        </div>
    );
}

export default Layout3Cards;