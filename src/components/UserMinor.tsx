import React from 'react'
import profilPic from '../assets/profile.jpg'
type Props = {
    name : string
}

const UserMinor = ({name}: Props) => {
  return (
    <div className='flex items-center justify-between'>
        <img className='size-16 rounded-full' src={profilPic}/>
        <h2 className='font-bold text-xl'>{name}</h2>
    </div>
  )
}

export default UserMinor