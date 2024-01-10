import React from 'react'
import SignInForm from './components/SignInForm'
import SVGWave from './components/SVGWave'

function SignIn() {
    return (
        <div className='signin-container'>
            <div className='signin-form-container justify-center'>
                <div className='container'>
                    <SignInForm />
                </div>
            </div>
            <SVGWave />
        </div>
    )
}

export default SignIn