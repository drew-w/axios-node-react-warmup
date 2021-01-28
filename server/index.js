const express = require('express');
const movieController = require('./controllers/movieController')
const app = express();
app.use(express.json())

const port = 3456;

app.get('/api/movies', movieController.getMovies)
app.delete('/api/movies/:id', movieController.deleteMovie)

app.listen(port, () => console.log(`server on at ${port}`))