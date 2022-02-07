
import '../Cards/Cards.css'


function CardApi({dataApi}) {
    return (
        <div className='cards'>
            {dataApi.map(card => {
                return (
                    <div className='card' key={card.name_short}>
                        <h2>{card.name}</h2>
                        <p>Número: {card.value}</p>
                        <p>Significado: {card.meaning_up}</p>
                        <p>Significado ao Contrário: {card.meaning_rev}</p>
                        {/* <p>Descrição: {card.desc}</p> */}

                    </div>
                )
            })}
        </div>
    );
}

export default CardApi;