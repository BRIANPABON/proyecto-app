import './CharactersPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import FiltersSection from '../FiltersSection/FiltersSection'
import CharacterCardsSection from '../CharacterCardsSection/CharacterCardsSection'


export default function CharactersPage() {

    const [charactersData, setCharactersData] = useState([])
    
    useEffect(() => {
        async function fetchData(endpoint) {
            let response = await fetch(endpoint)
            let fetchedData = await response.json()
            if (!charactersData.length) {
                setCharactersData(fetchedData.results)
            } else {
                setCharactersData((previousData) => [...previousData, ...fetchedData.results])
            }
            let nextPage = fetchedData.info.next
            if (nextPage) {
                fetchData(nextPage)
            }
        };
        fetchData('https://rickandmortyapi.com/api/character');     
    }, [])
    console.log(charactersData);
    
    return(        
        <div className='outer-container'>        
            <div className='inner-container'>  
                <NavBar />
                <FiltersSection />
                <CharacterCardsSection charactersData={charactersData}/>
            </div>
        </div>
    )
}