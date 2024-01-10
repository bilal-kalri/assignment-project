import React from 'react'
import SVGWave from "./components/SVGWave"

function NoMovie() {
    return (
        <div className='movie-container w-full movie-state-wrapper'>
            <div className='content'>
                <h1 className='text-center'>Your movie list is empty</h1>
                <div className='text-center'>
                    <button type='submit' className='button add-movie-btn'>Add a new movie</button>
                </div>
            </div>
            <div>
                <SVGWave />
            </div>
        </div>
    )
}

export default NoMovie