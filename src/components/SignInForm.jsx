import React from 'react'

function SignInForm() {
    return (
        <>
            <h1 className='text-center'>Sign in</h1>
            <form action="">
                <fieldset>
                    <div>
                        <input type="email" name='name' id='name' placeholder='Email' />
                    </div>
                    <div>
                        <input type="password" name='password' id='password' placeholder='Password' />
                    </div>
                    <div>
                        <label htmlFor="remember_me" className='flex items-center justify-center' id='remember_me'>Remember me</label>
                        <input type="checkbox" id='remember_me' placeholder='' />
                    </div>
                    <div>
                        <button type='submit' className='w-full button login'>Login</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default SignInForm