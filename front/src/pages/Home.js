import React from 'react';
import Headrer from '../components/Headrer';
import Footer from '../components/Footer';
import Chatbot from 'react-chatbot-kit';
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';
import '../sass/base/_base.scss';
import '../sass/pages/_home.scss';


const Home = () => {
    return (
        <div className='home'>
            <Headrer />
            <main className='main'>
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            </main>
            <Footer />
        </div>
    )
}

export default Home