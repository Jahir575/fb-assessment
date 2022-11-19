const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Hello World")
})

const MOVIE_LIST = []
app.post('/', (req, res) => {

    const { name, category, length, rating } = req.body

    if (!name || name === '') {
        return res.send("Name is required")
    }
    if (!category || category === '') {
        return res.send("category is required")
    }
    if (!length || length === '') {
        return res.send("length is required")
    }
    if (!rating || rating === '') {
        return res.send("rating is required")
    }

    MOVIE_LIST.push({ name, category, length, rating })
    return res.send("Movie is inserted successfully")
})

app.listen(8000, () => { console.log("Server is listening on port 8000") })