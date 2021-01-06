
import React, { Fragment } from 'react'
import AddFavorites from './AddFavorites'
import Movie from './Movie'
import RemoveFavourites from './RemoveFavourites'

const MovieList = (props) => {
    // console.log(props.movies);


    return (

        <Fragment>
            {props.movies.map((movie, index) => (

                <div className="image-container d-flex justify-content-start m-3 ">
                    <img key={movie.Poster} src={movie.Poster} alt="movie name" height="240px" width="160px"></img>

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
