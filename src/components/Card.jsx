import React from 'react'

function Card({ movie }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={`/images/${movie.image}`} alt="" />
                <div className='title'>{movie.title}</div>
                <div className='movie-date'>{movie.movie_data}</div>
            </div>
        </div>
    )
}

export default Card