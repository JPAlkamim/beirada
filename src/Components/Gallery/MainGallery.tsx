import React from 'react';
import { useSessionStorage } from 'usehooks-ts';
import image1 from '../../assets/fourByfour.png'

export const MainGallery = () => {
    const [galeryType, setGaleryType] = useSessionStorage('galeryType', '');

    return (
    <>
        <div className='mt-64 mb-24 mx-24 xl:mx-44'>
            <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Galeria</p>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
                <div className='relative' onClick={() => setGaleryType('PHOTO')}>
                    <img src={image1} alt="logo" className="cursor-pointer w-screen transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" style={{height: '400px'}} />
                    <p className='text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    style={{color: '#292822', fontFamily: 'Barlow'}}>Fotos</p>
                </div>
                <div className='relative' onClick={() => setGaleryType('VIDEOS')}>
                    <img src={image1} alt="logo" className="cursor-pointer w-screen transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" style={{height: '400px'}} />
                    <p className='text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    style={{color: '#292822', fontFamily: 'Barlow'}}>Vídeos</p>
                </div>
                <div className='relative' onClick={() => setGaleryType('AUDIO')}>
                    <img src={image1} alt="logo" className="cursor-pointer w-screen transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" style={{height: '400px'}} />
                    <p className='text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    style={{color: '#292822', fontFamily: 'Barlow'}}>Áudios</p>
                </div>
            </div>
        </div>
    </>
    )
}