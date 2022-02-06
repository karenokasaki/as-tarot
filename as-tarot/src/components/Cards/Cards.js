
import './Cards.css'


function Cards({data}) {
    
    return (
        <div className='cards'>
            {data.map(card => {
                return (
                    <div className='card' key={card.id}>
                        <h2>Nome: {card.cardName}</h2>
                        <p>Número: {card.cardNumber}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Cards;