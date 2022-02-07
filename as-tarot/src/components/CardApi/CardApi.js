
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cards/Cards.css'


function CardApi({ dataApi }) {

    useEffect(() => {
        
    })



    return (
        <div className='cards'>
            {dataApi.map(card => {
                return (
                    <div className='card' key={card.name_short}>
                        <h3>{card.name}</h3>
                        <p>Type: {card.type === 'major' ? 'Arcanjo Maior' : 'Arcanjo Menor'}</p>
                        <Link className='btn btn-outline-warning' to={`/home/${card.name_short}`}>Abrir Carta</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default CardApi;