import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainGallery } from './MainGallery';
import { GalleryPhotos } from './GalleryPhotos';
import { GalleryVideos } from './GalleryVideos';
import { GalleryAudios } from './GalleryAudios';
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
                   <GalleryVideos />
                )
            }
            {
                galeryType === 'AUDIO' && (
                    <GalleryAudios />
                )
            }
            {
                galeryType === '' && (
                    <MainGallery />
                )
            }
            <Footer/>
        </>
    )
}