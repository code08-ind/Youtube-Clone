import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20)
                })
            )
        }, 1500);

        // Code Cleanup
        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className='ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessages.map((message, index) =>
                    (
                        <ChatMessage name={message.name} key={index} message={message} />
                    ))
                    }
                </div>
            </div>
            <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=> {
                e.preventDefault();
                dispatch(addMessage({
                    name: 'Aryan',
                    message: liveMessage
                }))
                setLiveMessage('');
            }}>
                <input className='px-2 w-96 py-2' type="text" value={liveMessage} onChange={(e)=> {
                    setLiveMessage(e.target.value);
                }}/>
                <button className='px-2 mx-2 bg-green-100'>Send</button>
            </form>
        </>
    );
}

export default LiveChat;