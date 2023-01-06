import './FiltersSection.css'
import { Fragment } from 'react'
import Filter from '../Filter/Filter'

export default function FiltersSection({filterDataFunction}) {

    const filterTypes = ['Male', 'Female', 'Alive', 'Dead', 'Unknown origin']


    return(
        <Fragment>
            <div className='filters'>
                <h3 className='filters-title'>Filters</h3>
                <div className='filters-switches'>
                    {filterTypes.map((element, index) => {
                        return <Filter key={'id'+index} filterName={element} filterValue={element.split(' ')[0]} filterDataFunction={filterDataFunction}/>
                    })}
                </div>
            </div>
        </Fragment>

    )
}