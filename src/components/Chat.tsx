import React from 'react'
import Messages from "../json/Messages.json"
type Props = {}

const Chat = (props: Props) => {
    const user_id = "1"
    return (
        <div className='border-4 bg-yellow-600 basis-6/12 flex flex-col-reverse max-h-screen'>
            <div>dsafhag</div>
            <div className='w-full h-full border-2 border-gray-200 flex-grow overflow-x-auto'>
                <div className='flex flex-col-reverse justify-end '>
                    {Messages.map((message, index) => (
                        <div key={index} className={`border-2 border-black flex items-center justify-${user_id === message.receiver_id ? 'start' : 'end'}`}>
                            <p className='max-w-96 border-2 border-white'>{message.message}</p>
                            {/* <p className='max-w-96 border-2 border-white'>{message.message}</p> */}

                        </div>

                    ))}
                </div>
            </div>
            <div className='flex p-2'>
                <input className='flex-grow mx-2 rounded-md border-2 border-black' type='text' placeholder='message...' />
                <button className='rounded-md border-2 border-black w-20 bg-green-400' type='submit'>Send</button>
            </div>
        </div>
    )
}

export default Chat