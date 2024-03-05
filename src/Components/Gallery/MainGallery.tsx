import React from 'react';
import { useSessionStorage } from 'usehooks-ts';
import image1 from '../../assets/fourByfour.png';
import photo from '../../assets/capa galeria de fotos.png'
import audio from '../../assets/capa galeria de áudios.png'

export const MainGallery = () => {
    const [galeryType, setGaleryType] = useSessionStorage('galeryType', '');
    const [photoDetail, setPhotoDetail] = useSessionStorage('photoDetail', false);

    const handlePhotoDetail = () => {
        setGaleryType('PHOTO');
        setPhotoDetail(false);
    }


    return (
    <>
        <div className='mt-48 mb-24 mx-24 xl:mx-44'>
            <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Galeria</p>
            <div className="grid grid-cols-2 justify-items-center mt-10">
                <div className='relative' onClick={handlePhotoDetail}>
                    <img src={photo} alt="logo" className="cursor-pointer w-screen transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" style={{height: '500px', width: '350px'}} />
                    <p className='text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    style={{color: '#FFF', fontFamily: 'barlowRegular'}}>Fotos</p>
                </div>
                <div className='relative' onClick={() => setGaleryType('AUDIO')}>
                    <img src={audio} alt="logo" className="cursor-pointer w-screen transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" style={{height: '500px', width: '350px'}} />
                    <p className='text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    style={{color: '#FFF', fontFamily: 'barlowRegular'}}>Áudios</p>
                </div>
            </div>
        </div>
    </>
    )
}