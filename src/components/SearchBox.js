import React from 'react'

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control"
                type="text"
                name="moviesearch"
                placeholder="search movies"
                value={props.SearchValue}
                onChange= {(event)=> props.setSearchValue(event.target.value)}
                />
        </div>
    )
}

export default SearchBox
