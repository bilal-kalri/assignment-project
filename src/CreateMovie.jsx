import React from 'react'
import MovieUploader from './components/MovieUploader'
import SVGWave from './components/SVGWave'

function CreateMovie() {
    return (
        <div className='movie-container'>
            <div className='container'>
                <h1>Create a new movie </h1>
                <MovieUploader />
            </div>
            <SVGWave />
        </div>
    )
}

export default CreateMovie