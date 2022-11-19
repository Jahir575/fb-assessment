import React, { useEffect, useState } from 'react'
import { getMovieList } from '../api'
import Loader from '../Components/Loader'
import MovieCard from '../Components/MovieCard'
import NavbarComponent from '../Components/NavbarComponent'

const Dashboard = () => {
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchMovieList = async () => {
        try {
            const movieList = await getMovieList()
            setMovieList(movieList)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMovieList()
        return () => {
            setMovieList([])
        }
    }, [])

    if (loading) {
        return <Loader />
    }
    return (
        <>
            <NavbarComponent />
            <div className='container movie-card-container' >
                {movieList.map(movie => <div className='single-card' key={movie.id}><MovieCard name={movie.name} rating={movie.rating} release_date={movie.released_date} /></div>)}
            </div>
        </>
    )
}

export default Dashboard