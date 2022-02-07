import { Link } from 'react-router-dom'
import './Search.css'

function Search({ search, setSearch }) {

    return (
        <nav className='navbar'>
            <form className="searchForm form-control" onSubmit={(e) => { e.preventDefault() }}>
                <label htmlFor="search"></label>
                <input
                    id="search"
                    type="text"
                    role="searchbox"
                    placeholder="Search cards"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <Link className='btn btn-sm btn-outline-success' to='/layout'>Layout - Tiragem</Link>
        </nav>
    );
}

export default Search;