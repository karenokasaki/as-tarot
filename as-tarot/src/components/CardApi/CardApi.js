
import { Link } from 'react-router-dom';
import '../Cards/Cards.css'

function CardApi({ dataApi }) {
    return (
        <div className='cards'>
            {dataApi.map(card => {
                return (
                    <div className='card' key={card.name_short}>
                        <h4>{card.name}</h4>
                        <p>Type: {card.type === 'major' ? 'Arcanjo Maior' : 'Arcanjo Menor'}</p>
                        <Link className='btn btn-sm btn-outline-warning' to={`/home/${card.name_short}`}>Abrir Carta</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default CardApi;