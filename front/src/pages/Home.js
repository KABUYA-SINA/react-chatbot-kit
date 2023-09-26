import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatbotBox from '../components/Chatbot';
import { IoChatbubblesSharp } from 'react-icons/io5';
import 'react-chatbot-kit/build/main.css';
import '../sass/base/_base.scss';
import '../sass/pages/_home.scss';

const Home = () => {

    const [showBot, toggleBot] = useState(false);
    document.addEventListener("DOMContentLoaded", function () {
        const parent = document.querySelector('#parent > div > div')
        parent.className = "child"
    });

    return (
        <div className='home'>
            <Header />
            <main className='main'>
                <button className='btn' type='button' onClick={() => toggleBot((prev) => !prev)}>
                    <IoChatbubblesSharp size='3rem' />
                </button>
                {
                    showBot && (
                        <ChatbotBox />
                    )
                }
            </main>
            <Footer />
        </div>
    )
}

export default Home;

