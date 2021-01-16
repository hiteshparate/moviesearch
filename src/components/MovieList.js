
import React, { Fragment } from 'react'
import AddFavorites from './AddFavorites'
import Movie from './Movie'
import RemoveFavourites from './RemoveFavourites'
import not_found from '../../src/not_found.png'

const MovieList = (props) => {
    // console.log(props.movies);

    

    return (

        <Fragment>
            {props.movies.map((movie, index) =>
                movie === null ? (<p>no data available</p>) : (<div key={movie.imdbID} className="image-container d-flex justify-content-start m-3 ">
                    <img key={movie.imdbID} src={movie.Poster === "N/A" ?  not_found : movie.Poster} alt="movie" height="240px" width="160px" ></img>

                    {props.fav ? (<div onClick={() => props.handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <AddFavorites></AddFavorites>
                    </div>) : (<div onClick={() => props.handleremoveFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <RemoveFavourites></RemoveFavourites>
                    </div>
                        )




                    }

                    <span className="overlay fixed-bottom "><Movie movie={movie}></Movie></span>





                </div>

                )

            )}
        </Fragment >
    )
}

export default MovieList
