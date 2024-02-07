import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Gallery = () => {
    return (
        <>
            <Header currentPage='GALERIA'/>
            <div className='mt-64'>
                <p>Galeria de fotos</p>
            </div>
            <Footer/>
        </>
    )
}