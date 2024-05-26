import ChatContact from './ChatContact'
type Props = {
    chatList: Array<{
        name: string,
        lastMessage: string,
        date: string
    }>
}

const ChatContactsList = ({chatList}: Props) => {
    return (
        <div className='overflow-scroll'>{chatList.map((chat , index) => (
            <ChatContact name={chat.name} lastMessage={chat.lastMessage} date={chat.date} key={index}/>
        ))}</div>
    )
}

export default ChatContactsList