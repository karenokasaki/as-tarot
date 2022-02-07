import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';
import data from './data.json'
import tarot from './card_data.json'
import CardApi from  './components/CardApi/CardApi'



function App() {
  const [search, setSearch] = useState('')
  
  const [TarotApi, setTarotApi] = useState([])
  

  const axios = require('axios')
  axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards').then( resp => {
    setTarotApi(resp.data.cards)
  })
  


  return (
    <div className="App">
      <Search 
        search={search} 
        setSearch={setSearch}/>

      <CardApi 
        dataApi={TarotApi}
      />
      <Cards 
        data={data.filter(card => 
        ((card.cardName)).toLowerCase().includes(search.toLowerCase())
        )}/>

    </div>
  );
}

export default App;
