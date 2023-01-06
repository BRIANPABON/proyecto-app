import './Filter.css'

export default function Filter({filterName, filterValue, filterDataFunction}) {
    return(
        <div className="form-check form-switch filter-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={filterValue} value={filterValue} onClick={filterDataFunction} />
            <label className="form-check-label" htmlFor={filterValue}>{filterName}</label>
        </div>
    )
}