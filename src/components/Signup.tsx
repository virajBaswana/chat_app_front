import React from 'react'
import pic from "../assets/profile.jpg"
type Props = {}

const Signup = (props: Props) => {
    return (
        <div>
            <div>
                <img className='w-1/2' src={pic} alt="" />
            </div>
            <div>
                <form className='flex flex-col  items-start'>
                    <label className='mt-8'>
                        Email :
                    </label>
                    <input className='w-1/3 border-2 border-black' type="text" />
                    <label className='mt-8'>
                        Password :
                    </label>
                    <input className='w-1/3 border-2 border-black' type="password" />
                    <label className='mt-8'>
                        Confirm Password :
                    </label>
                    <input className='w-1/3 border-2 border-black' type="password" />
                    <button className='border-2 border-black mt-8 p-2 w-64' type='submit'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup