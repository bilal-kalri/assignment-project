import React from 'react'
import MovieUploader from './components/MovieUploader'
import SVGWave from './components/SVGWave'

function EditMovie() {
    return (
        <div className='movie-container'>
            <div className='container'>
                <h1>Edit</h1>
                <MovieUploader />
            </div>
            <SVGWave />
        </div>
    )
}

export default EditMovie