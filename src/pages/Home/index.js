import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { Link, useLocation } from "wouter";
import getGifs from 'services/getGifts'
import ListOfGifts from 'components/ListOfGifts'
import {useGifs} from 'hooks/useGifs'
import Category from "components/Category";
import TrendingSearches from "components/TrendingSearches";



const POPULAR_GIFS = ['One Piece','Peru','Resiendt Evil','Matrix','Goku']

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()            
    const {loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        //Naavegar a Otra ruta?         
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {        
        setKeyword(evt.target.value)
    }
    return (
        <>
            <h3 className="App-title">Los Gifs mas Populares</h3>
            <form onSubmit={handleSubmit} >
                <input placeholder = "Search your favorite gif here ..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>
            <div className='App-main'>
                <h3 className='App-title'>Última busqueda</h3>
                <ListOfGifts gifs ={gifs}/>
            </div>                
            <div className='App-category'>
                <TrendingSearches />
            </div>
        </>
    )
}

