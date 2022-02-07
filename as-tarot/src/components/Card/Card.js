
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Card = ({ data, setSearch }) => {
    const { name_short } = useParams()

    useEffect(() => {
        setSearch('')
    })
    
    return (
        <div>
            {data
            .filter((card) => card.name_short === name_short)
            .map((card) => ( 
                <div key={card.name_short}>
                    <h1>{card.name}</h1>
                    <h3>Type:</h3>
                        <p> {card.type === 'major' ? 'Arcanjo Maior' : 'Arcanjo Menor'}</p>
                    <h3>Significado:</h3>
                        <p> {card.meaning_up}</p>
                    <h3>Significado Reverso:</h3>
                        <p> {card.meaning_rev}</p>
                    <h3>Descrição Completa:</h3>
                    <p> {card.desc}</p>
                    <Link className='btn btn-dark'to='/home'>Voltar</Link>
                </div>
            ))
            }
            
        </div>
    );
}

export default Card;