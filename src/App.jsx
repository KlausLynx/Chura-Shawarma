import React from 'react';
import Layout from './components/Layout';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';

const SuyaApp = () => {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>        
                </Routes>
            </Layout>
        </HashRouter>
    )
}

export default SuyaApp