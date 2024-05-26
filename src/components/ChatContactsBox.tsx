import React from 'react'
import ChatContactsList from './ChatContactsList'
import ChatContactsListJson from '../json/ChatContacts.json'
import UserMinor from './UserMinor'
import SearchContacts from './SearchContacts'

type Props = {}

const ChatContactsBox = (props: Props) => {
    return (
        <div className='flex flex-col gap-2 h-screen border-8 border-pink-600 basis-3/12'>
            <div className=''>
                <UserMinor name='Dummy' />
                <SearchContacts />

            </div>
            <ChatContactsList chatList={ChatContactsListJson} />
        </div>
    )
}

export default ChatContactsBox