import React, { Component, Fragment } from 'react'
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { Close, ExpandMore } from '@material-ui/icons'



class Movie extends Component {

    state = {
        open: false,
        movieDetails: {},

    }
    handleClose = () => {
        this.setState({ open: false })
    }
    handleOpen = () => {
        this.setState({ open: true });
        console.log(this.props.movie);
        this.getMovieDetails(this.props.movie.imdbID);

    }
    getMovieDetails = async (movieId) => {
        const url = `https://www.omdbapi.com/?i=${movieId}&apikey=f441d06c`;
        const response = await fetch(url);
        const responseJson = await response.json();
        this.setState({ movieDetails: responseJson });
        console.log(this.state);
    }
    dialog = ({
        background: "black",
        position: "relative",
    })
    render() {
        const { Title, Year, Poster } = this.props.movie;
        const {

            Rated,
            Language,
            Genre,
            Writer,
            Director,
            Actors,
            BoxOffice,
            Episode,
            Season,
            Plot,
            Runtime,
            Awards,
        } = this.state.movieDetails;

        return (
            <Fragment >
                <Tooltip title="movie details">

                    <IconButton onClick={this.handleOpen} color="primary">

                        <ExpandMore></ExpandMore>

                    </IconButton>
                </Tooltip>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth >
                    <DialogTitle title="Movies Details" style={{ alignContent: 'center', padding: '20', color: "white", background: "rgba(0,0,0,0.8)" }}>
                        Movie Details
                        <Tooltip title="close">
                            <IconButton onClick={this.handleClose} className="float-right" color="secondary">
                                <Close></Close>
                            </IconButton>
                        </Tooltip>
                    </DialogTitle>
                    <DialogContent style={{ alignContent: 'center', padding: '20', color: "white", background: "rgba(0,0,0,0.8)" }} >
                        <Grid container>
                            <Grid item sm={5}>
                                <img src={Poster} alt="movie" width={200} height={300}></img>

                            </Grid>
                            <Grid item sm={7}>
                                <Typography variant="h5" color="primary"> <a href={`https://www.google.com/search?q=${Title}`} target="_blank" rel="noreferrer">{Title}</a></Typography>
                                <Typography variant="body1">{Year}</Typography>
                                {Genre ? (<Typography variant="body1">{Genre}</Typography>) : (null)}
                                {Director ? (<Typography variant="body1">Director: {Director}</Typography>) : (null)}
                                {Language ? (<Typography variant="body1">Language: {Language}</Typography>) : (null)}
                                {Rated ? (<Typography variant="body1">Rated: {Rated}</Typography>) : (null)}
                                {Episode ? (<Typography variant="body1">Episode: {Episode}</Typography>) : (null)}
                                {Season ? (<Typography variant="body1">Season: {Season}</Typography>) : (null)}
                                {Actors ? (<Typography variant="body1">Actors: {Actors}</Typography>) : (null)}
                                {Runtime ? (<Typography variant="body1">Duration: {Runtime}</Typography>) : (null)}
                                <Typography variant="body1">Awards: {Awards}</Typography>
                                {BoxOffice ? (<Typography variant="body1">Earnings: {BoxOffice}</Typography>) : (null)}

                            </Grid>
                            <br></br>
                            <Typography variant="body2">Writer: {Writer}</Typography>
                            <Typography variant="body2">Plot: {Plot}</Typography>

                        </Grid>



                    </DialogContent>
                </Dialog>

            </Fragment>
        )
    }
}

export default Movie
