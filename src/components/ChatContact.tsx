import profileImage from '../assets/profile.jpg'
type Props = {
    name: string,
    lastMessage: string,
    date: string
}

const ChatContact = (props: Props) => {
    return (
        <div className='flex items-center justify-between p-4 border-blue-700 border-2 rounded-sm'>
            <div className='flex items-center justify-start gap-2'>
                <img className='rounded-full size-10' src={profileImage} alt="profile image" />
                <div >
                    <h2 className='font-bold text-lg '>{props.name}</h2>
                    <p className='truncate max-w-40'>{props.lastMessage}</p>
                </div>
            </div>
            <div>{props.date}</div>
        </div>
    )
}

export default ChatContact