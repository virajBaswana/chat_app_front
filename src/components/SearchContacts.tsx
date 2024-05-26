import React from 'react'

type Props = {}

const SearchContacts = (props: Props) => {
  return (
    <div className='flex'>
        <input className='flex-grow border-2 border-black' type='text'/>
        <button className='bg-blue-300 border-2 rounder-md border-black'>Search</button>
    </div>
  )
}

export default SearchContacts