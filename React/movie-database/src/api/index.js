import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getMovieList = async () => {
    const response = await client.get('/movies')
    return response.data
}