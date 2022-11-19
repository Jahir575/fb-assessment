const express = require('express');
const { readFileSync } = require('fs');
const path = require('path')
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Hello, World!");
});

app.get('/movies', (req, res) => {
    const file_path = path.join(__dirname, "..", "movies.json")
    const movies = readFileSync(file_path).toString()
    console.log(movies)
    return res.send(movies)
})

const MOVIE_LIST = []
app.post('/', (req, res) => {

    const { name, rating, release_date } = req.body

    if (!name || name === '') {
        return res.send("Name is required")
    }
    if (!release_date || release_date === '') {
        return res.send("release_date is required")
    }
    if (!rating || rating === '') {
        return res.send("rating is required")
    }

    MOVIE_LIST.push({ name, category, length, rating })
    return res.send("Movie is inserted successfully")
})

app.listen(8000, () => { console.log("Server is listening on port 8000") })