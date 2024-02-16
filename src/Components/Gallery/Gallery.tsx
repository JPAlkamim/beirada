import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainGallery } from './MainGallery';
import { GalleryPhotos } from './GalleryPhotos';
import { useSessionStorage } from 'usehooks-ts';
import image1 from '../../assets/fourByfour.png'

export const Gallery = () => {

    const [galeryType, setGaleryType] = useSessionStorage('galeryType', '');

    return (
        <>
            <Header currentPage='GALERIA'/>
            {
                galeryType === 'PHOTO' && (
                    <GalleryPhotos/>
                )
            }
            {
                galeryType === 'VIDEOS' && (
                    <div className='mt-64'>
                        <p>Galeria de vídeos</p>
                    </div>
                
                )
            }
            {
                galeryType === 'AUDIO' && (
                    <div className='mt-64'>
                        <p>Galeria de áudios</p>
                    </div>
                )
            }
            {
                galeryType === '' && (
                    <MainGallery/>
                )
            }
            <Footer/>
        </>
    )
}