import React from "react";
import ListOfGifts from 'components/ListOfGifts'
import {useGifs} from 'hooks/useGifs'


export default function SearchResults({ params }){
    const { keyword } = params    
    const {loading, gifs, setPage } = useGifs({keyword})    

    const handleNextPage = () =>setPage(prevPage => prevPage + 1)
    
    return <>
        {loading
            ? ''
            : <>
                <h3 className='App-title'>{decodeURI(keyword)}</h3>
                <ListOfGifts gifs ={gifs}/>
            </>
        }
        <br/>
        <button onClick = {handleNextPage}>Get next Page</button>
    </>

}