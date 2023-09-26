import React, { useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import MessageParser from '../chatbot/MessageParser';
import config from '../chatbot/config';
import ActionProvider from '../chatbot/ActionProvider';

const ChatbotBox = () => {

    useEffect(() => {
        const parent = document.querySelector('#parent > div > div')
        if (parent) {
            parent.className = "child"
        }
    }, [])

    return (
        <div className='parent' id='parent'>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                close="true"
            />
        </div>
    )

}

export default ChatbotBox;