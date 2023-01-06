import './CharactersPage.css'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import FiltersSection from '../FiltersSection/FiltersSection'
import CharacterCardsSection from '../CharacterCardsSection/CharacterCardsSection'


export default function CharactersPage() {

    const [fullCharactersData, setFullCharactersData] = useState([])
    const [filteredCharactersData, setFilteredCharactersData] = useState([])
    const [nrOfCharacters, setNrOfCharacters] = useState(fullCharactersData.length)
    const [filteringCriteria, setFilteringCriteria] = useState([])
    
    async function fetchData(endpoint, dataAccumulator=[]) {        
        let response = await fetch(endpoint)
        let fetchedData = await response.json()
        if (!dataAccumulator.length) {
            dataAccumulator = fetchedData.results
        } else {
            dataAccumulator.push(...fetchedData.results)            
        }
        let nextPage = fetchedData.info.next
        if (nextPage) {
            await fetchData(nextPage, dataAccumulator)
        }
        return dataAccumulator
    };
    
    async function saveData() {
        let retrievedData = await fetchData('https://rickandmortyapi.com/api/character');            
        setFullCharactersData(retrievedData)     
        setFilteredCharactersData(retrievedData)        
    }
    
    function manageFilteringCriteria(event) {
        if (event.target.checked) {
            setFilteringCriteria((previousData) => [...previousData, event.target.value])                
        } else if (!event.target.checked) {
            let tempFilteringCriteria = filteringCriteria
            tempFilteringCriteria.splice(filteringCriteria.indexOf(event.target.value), 1)
            setFilteringCriteria(() => [...tempFilteringCriteria])
        }        
    }

    function filterCharacters() {
        let tempFilteredData = fullCharactersData
        for (let criteria of filteringCriteria) {
            if (criteria === 'Unknown') {
                tempFilteredData = tempFilteredData.filter((character) => character.origin.name === 'unknown')
            }
            else {
                tempFilteredData = tempFilteredData.filter((character) => Object.values(character).includes(criteria))
            }
        }
        setFilteredCharactersData([...tempFilteredData])
    }

    useEffect(() => {
        saveData();                        
    }, [])

    useEffect(() => {
        setNrOfCharacters(filteredCharactersData.length)
    }, [filteredCharactersData])  
    
    useEffect(() => {
        filterCharacters()
    }, [filteringCriteria])


    return(        
        <div className='outer-container-char-page'>        
            <div className='inner-container-char-page'>  
                <NavBar />
                <FiltersSection filterDataFunction={manageFilteringCriteria}/>
                <h3 className='chars-shown'>Number of characters shown: {nrOfCharacters}</h3>
                {fullCharactersData.length === 0  
                ? <aside className='loading-text'>Loading, please wait...</aside>
                : ''}
                <section>
                    <CharacterCardsSection className='character-cards-section' charactersData={filteredCharactersData} />                
                </section>                
            </div>
        </div>
    )
}