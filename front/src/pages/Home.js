import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatbotBox from '../components/Chatbot';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { motion } from "framer-motion"
import 'react-chatbot-kit/build/main.css';
import '../sass/base/_base.scss';
import '../sass/pages/_home.scss';

const Home = () => {

    const [showBot, toggleBot] = useState(false);
    document.addEventListener("DOMContentLoaded", function () {
        const parent = document.querySelector('#parent > div > div')
        parent.className = "child"
    });
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: .9, x: "-100%" },
    }

    return (
        <div className='home'>
            <Header />
            <main className='main'>
                <motion.button
                    className='btn'
                    type='button'
                    onClick={() => toggleBot((prev) => !prev)}
                    animate={showBot ? "open" : "closed"}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IoChatbubblesSharp size='3rem' />
                </motion.button>
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

