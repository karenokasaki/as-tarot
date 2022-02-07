import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function Layout({setSearch}) {

    useEffect(() => {
        setSearch('')
    })

    return (
        <div>
            <ul className='list-group'>Geral
                <li className='list-group-items'><Link to={`/layout/layout3Cartas`}>3-Cartas</Link></li>
                <li className='list-group-items'><Link to={`/layout/layout5Cartas`}>5-Cartas</Link></li>
                <li className='list-group-items'><Link to={`/layout/layout6Cartas`}>6-Cartas</Link></li>
            </ul>

            <Link className='btn btn-outline-warning' to='/home'>Voltar</Link>
        </div>
    );
}

export default Layout;