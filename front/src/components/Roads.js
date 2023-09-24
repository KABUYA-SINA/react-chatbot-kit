import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Error from '../pages/Error';

const Roads = () => {
    return (
        <AnimatePresence >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Roads;