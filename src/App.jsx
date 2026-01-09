import React from 'react';
import Layout from './components/Layout';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const SuyaApp = () => {
    return (
        <BrowserRouter basename='suya'>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>        
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default SuyaApp