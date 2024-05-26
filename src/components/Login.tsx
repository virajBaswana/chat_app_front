import React from 'react'
import pic from "../assets/profile.jpg"

type Props = {}

const Login = (props: Props) => {
    return (
        <div className='h-screen flex'>

            <div className='w-1/2 max-h-full'>
                <img className='object-scale-down h-full' src={pic} alt="" />
            </div>
            <form className='flex flex-col  items-start'>
                <label className='mt-8'>
                    Email :
                </label>
                <input className='w-1/3 border-2 border-black' type="text" />
                <label className='mt-8'>
                    Password :
                </label>
                <input className='w-1/3 border-2 border-black' type="password" />
                <button className='border-2 border-black mt-8 p-2 w-64' type='submit'>Login</button>
            </form>
        </div>

    )
}

export default Login