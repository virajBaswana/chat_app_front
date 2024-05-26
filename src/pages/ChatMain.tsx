import React from 'react'
import ChatContactsBox from '../components/ChatContactsBox'
import Chat from '../components/Chat'
import Details from '../components/Details'


type Props = {}

const ChatMain = (props: Props) => {
  return (
    <div className='flex h-screen'>
        <ChatContactsBox/>
        <Chat/>
        <Details />
    </div>
  )
}

export default ChatMain