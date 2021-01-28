import { Component } from 'react'
import axios from 'axios'

class MoviesComp extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('/api/movies')
            .then(res => {

                this.setState({
                    movies: res.data
                })
            })
            .catch(err => console.log(err))
    }

    deleteMovie = (id) => {
        console.log(id)
        axios.delete(`/api/movies/${id}`)
        .then(res => this.setState({movies: res.data}))
        .catch()
    }

    render() {
        return (
            <div>
                {this.state.movies.map((movie) => {
                    return (
                        <div>
                            <span>{movie.title}</span>
                            <button onClick={() => this.deleteMovie(movie.id)}>X</button>
                        </div>
                    )

                })}
            </div>
        )
    }
}

export default MoviesComp