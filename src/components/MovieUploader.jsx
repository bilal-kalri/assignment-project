import React from 'react'
import FileUploader from './FileUploader'

function MovieUploader() {
    return (
        <div className='flex sm-direction-col'>
            <div className='img-drop-zon'>
                <FileUploader />
            </div>
            <div className='form'>
                <form>
                    <fieldset>
                        <div>
                            <input type="text" name='name' id='name' placeholder='Title' />
                        </div>
                        <div className='publish-year'>
                            <input type="text" name='password' id='password' placeholder='Publishing year' />
                        </div>
                        <div className='flex gtn-group'>
                            <button type='submit' className='w-full button login cancel'>Cancel</button>
                            <button type='submit' className='w-full button login'>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default MovieUploader