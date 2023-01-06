import './CharacterCard.css'
import { useState } from 'react'

export default function CharacterCard({characterInfo}) {

    const [showInfo, setShowInfo] = useState(false)

    function unhideInfo() {
        setShowInfo(true)
    }
    
    function hideInfo() {
        setShowInfo(false)
    }


    return(
        <div className='full-char-info'>        
            <div className="card character-card">
                <img src={characterInfo.image} className="card-img-top" alt="Character" />
                <div className="card-body">
                    <h5 className="card-title">{characterInfo.name}</h5>
                    <button onClick={unhideInfo} className={showInfo ? "d-none" : "btn btn-primary show-more"}>Show more</button>
                </div>
            </div>
            {showInfo ? 
            <div className='additional-char-info'>
                <button onClick={hideInfo} className='close-additional-info'>X</button>
                <ul>
                    <li>Status <span>{characterInfo.status}</span></li>
                    <li>Species <span>{characterInfo.species}</span></li>
                    <li>Origin <span>{characterInfo.origin.name}</span></li>
                    <li>Gender <span>{characterInfo.gender}</span></li>
                </ul>
            </div>
            : ''}
        </div>
    )
}