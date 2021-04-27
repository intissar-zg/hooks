import React from 'react'
import { CardDeck } from 'react-bootstrap'
import MovieCard from './MovieCard'

const MovieList = ({Movies}) => {
    return (
        <CardDeck>
           {Movies.map(el=> <MovieCard movie={el}></MovieCard>)}
           </CardDeck>
    )
}

export default MovieList
