import './CharacterCardsSection.css'
import { Fragment } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'

export default function CharacterCardsSection({charactersData}) {

    return(
        <Fragment>
            <section className='character-cards-section'>
                {charactersData.map((element) => {
                    return <CharacterCard key={'id'+element.id} characterInfo={element} className='character-card' />  
                })}
            </section>
        </Fragment>
    )
}