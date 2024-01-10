import React from 'react'
import Card from './components/Card'
import SVGWave from './components/SVGWave'
import { NavLink } from 'react-router-dom'

const movie_data = [
    {
        "id": 1,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img1.png"
    },
    {
        "id": 2,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img2.png"
    },
    {
        "id": 3,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img2.png"
    },
    {
        "id": 4,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img3.png"
    },
    {
        "id": 5,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img1.png"
    },
    {
        "id": 6,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img2.png"
    },
    {
        "id": 7,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img2.png"
    },
    {
        "id": 8,
        "title": "Movie 1",
        "movie_data": "2021",
        "image": "img3.png"
    },
]

function MovieList() {
    return (
        <div className='movie-list-container'>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h1 className='text-center'>My movies</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='svg-plus'>
                            <g clipPath="url(#clip0_3_196)">
                                <path d="M17.3334 9.33332H14.6667V14.6667H9.33342V17.3333H14.6667V22.6667H17.3334V17.3333H22.6667V14.6667H17.3334V9.33332ZM16.0001 2.66666C8.64008 2.66666 2.66675 8.63999 2.66675 16C2.66675 23.36 8.64008 29.3333 16.0001 29.3333C23.3601 29.3333 29.3334 23.36 29.3334 16C29.3334 8.63999 23.3601 2.66666 16.0001 2.66666ZM16.0001 26.6667C10.1201 26.6667 5.33341 21.88 5.33341 16C5.33341 10.12 10.1201 5.33332 16.0001 5.33332C21.8801 5.33332 26.6667 10.12 26.6667 16C26.6667 21.88 21.8801 26.6667 16.0001 26.6667Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_196">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='flex items-center'>
                        <NavLink to="#" className='logout'>Logout</NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_7_232)">
                                <path d="M22.6667 10.6667L20.7867 12.5467L22.8933 14.6667H12V17.3333H22.8933L20.7867 19.44L22.6667 21.3333L28 16L22.6667 10.6667ZM6.66667 6.66667H16V4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H16V25.3333H6.66667V6.66667Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_7_232">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='row movie-content'>
                    {
                        movie_data.map((movie) => <Card key={movie.id} movie={movie} />)
                    }
                </div>
                <div className='pagination'>
                    <ul className='flex items-center justify-center w-full'>
                        <li className='prv'>
                            <NavLink to="#">Prv</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="btn active-btn">1</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="btn">2</NavLink>
                        </li>
                        <li className='next'>
                            <NavLink to="#">Next</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <SVGWave />
        </div>
    )
}

export default MovieList