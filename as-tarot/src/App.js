import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Search from './components/Search/Search';
import CardApi from './components/CardApi/CardApi'
import Card from './components/Card/Card'
import Layout from './components/Layout/Layout';
import Layout3Cards from './components/Layout/Layout3Cartas';

function App() {
  const [search, setSearch] = useState('')

  const [TarotApi, setTarotApi] = useState([])

  useEffect(() => {
    const axios = require('axios')
    axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards').then(resp => {
      setTarotApi(resp.data.cards)
    })

  }, [])

  return (

    <div className="App">

      <div >
        <Search
          search={search}
          setSearch={setSearch} />
      </div>

      <Routes>
        <Route
          path="/home"
          exact
          element={<CardApi
            dataApi={TarotApi
              .filter(card =>
                ((card.name)).toLowerCase()
                  .includes(search.toLowerCase())
              )} />} />
        <Route
          path={`/home/:name_short`}
          element={<Card data={TarotApi} setSearch={setSearch} />} />
        <Route
          path='/layout'
          exact
          element={<Layout setSearch={setSearch} />} />
          <Route 
            path={`/layout/:id_layout`}
            element={<Layout3Cards />}
          />
      </Routes>


      {/* <Cards
        data={data.filter(card =>
          ((card.cardName)).toLowerCase().includes(search.toLowerCase())
        )} /> */}

    </div>
  );
}

export default App;
