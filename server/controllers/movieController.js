const movies = [
    {id:1, title: 'movie 1'}, {id:2, title: 'movie 2'}, {id:3, title: 'movie 3'}
]

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: () => {},
    editMovie: () => {},
    deleteMovie: (req, res) => {
        const movieIndex = movies.findIndex((e) => e.id === req.params.id)
        movies.splice(movieIndex, 1)
        res.status(200).send(movies)
    }
}