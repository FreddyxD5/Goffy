import logo from './logo.svg';
import './App.css';
import './components/styles.css'
import React, { useEffect, useState } from 'react';
import ListOfGifts from './components/ListOfGifts';
import Home from './pages/Home';
import SearchResults from './pages/SearchResult';
import Detail from './pages/Detail';

import { Link, Route } from 'wouter';

import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';


const GIFS = [
  'https://media1.giphy.com/media/r17CORskgCZKZSWVem/giphy.gif?cid=ecf05e473594437f57e21c61b931e57bcdeee646c0f57444&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/eDXcHIdARrCv9xjqZ9/200w.webp?cid=ecf05e47sjwfzgfrb0m2axzywe63gsf7dydcwllssptmm1og&rid=200w.webp&ct=g'  
]

const DIF_GIFS = ['https://media2.giphy.com/media/k6OBDwY6oR2ZZf9Hlw/200w.webp']




function App() {
  const [keyword, setKeyword] = useState('pandas')

  return (
    <StaticContext.Provider value ={{
      name:'JesusuDev',
      suscribeteAlCanal:true
    }}>      
      <div className="App">
        <section className="App-content">        
          <Link to="/">Imagen de un logo</Link>          

          <Link to="/gif/:matrix">Gif de Matrix</Link>
          <Link to="/gif/:fiorella">Fiorella</Link>
          <Link to="/gif/:espacio">Gifs de espacio</Link>
          <Link to="/gif/:noche">Gifs de noche</Link>
          <Link to="/gif/:peru">Gifs de Peru</Link>
          
          <GifsContextProvider>
            <Route 
                  component = {Home}
                  path="/"
            />
            
            <Route 
                  component ={SearchResults}
                  path = "/search/:keyword"        
            />
            <Route 
                  component ={Detail}
                  path = "/gif/:id"        
            />
          </GifsContextProvider>
              
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
