import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import data from './data.json'



function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Search 
        search={search} 
        setSearch={setSearch}/>

      <Cards 
        data={data.filter(card => 
        ((card.cardName)).toLowerCase().includes(search.toLowerCase())
        )}/>
    </div>
  );
}

export default App;
