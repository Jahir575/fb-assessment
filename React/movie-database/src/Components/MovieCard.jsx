import React from 'react'
import { Card } from 'react-bootstrap'
const MovieCard = ({ name, rating, release_date }) => {
    return (
        <Card className='card-style'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Rating: <strong>{rating}</strong></Card.Text>
                <Card.Text>Release Date: <strong>{release_date}</strong></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard