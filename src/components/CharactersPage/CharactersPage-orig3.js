import './CharactersPage.css'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import FiltersSection from '../FiltersSection/FiltersSection'
import CharacterCardsSection from '../CharacterCardsSection/CharacterCardsSection'


export default function CharactersPage() {

    const [fullCharactersData, setFullCharactersData] = useState([])
    const [filteredCharactersData, setFilteredCharactersData] = useState([])
    const [nrOfCharacters, setNrOfCharacters] = useState(fullCharactersData.length)
    
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
    
    function filterData(event) {
        if (event.target.checked) {
            if (event.target.value === "Alive") {
                let tempFilteredCharactersData = fullCharactersData.filter((element) => element.status === "Alive")
                setFilteredCharactersData([...tempFilteredCharactersData])
            }
        } else if (!event.target.checked) {
            setFilteredCharactersData([...fullCharactersData])
        }
    }

    useEffect(() => {
        saveData();                        
    }, [])

    useEffect(() => {
        setNrOfCharacters(filteredCharactersData.length)
    }, [filteredCharactersData])
    

    return(        
        <div className='outer-container-char-page'>        
            <div className='inner-container-char-page'>  
                <NavBar />
                <FiltersSection filterDataFunction={filterData}/>
                <h3>Number of characters shown: {nrOfCharacters}</h3>
                <section>
                    <CharacterCardsSection className='character-cards-section' charactersData={filteredCharactersData} />                
                </section>                
            </div>
        </div>
    )
}