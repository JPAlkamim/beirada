import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const FanArea = () => {
    return (
        <>
            <Header currentPage='AREA DO TORCEDOR'/>
            <div className='mt-64'>
                <p>Aréa dos fãs</p>
            </div>
            <Footer/>
        </>
    )
}