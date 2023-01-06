import './CharactersPage.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import FiltersSection from '../FiltersSection/FiltersSection'
import CharacterCardsSection from '../CharacterCardsSection/CharacterCardsSection'


export default function CharactersPage() {

    const [charactersData, setCharactersData] = useState([])
    useEffect(() => {
        let tempCharData = []
        async function fetchData(endpoint, dataAccumulator) {        
            let response = await fetch(endpoint)
            let fetchedData = await response.json()
            if (!dataAccumulator.length) {
                dataAccumulator = fetchedData.results
            } else {
                dataAccumulator.push(...fetchedData.results)            
            }
            let nextPage = fetchedData.info.next
            if (nextPage) {
                fetchData(nextPage, dataAccumulator)
            }
            tempCharData = dataAccumulator
        };
        setTimeout(() => {                
            console.log(tempCharData);                
        }, 1000);
        fetchData('https://rickandmortyapi.com/api/character', []);            
    }, [])
    

    return(        
        <div className='outer-container'>        
            <div className='inner-container'>  
                <NavBar />
                <FiltersSection />
                <CharacterCardsSection />
            </div>
        </div>
    )
}