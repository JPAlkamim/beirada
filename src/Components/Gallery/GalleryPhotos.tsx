import React from 'react'
import image1 from '../../assets/fourByfour.png'
import { Link } from 'react-router-dom'


export const GalleryPhotos = () => {
    const [photoDetail, setPhotoDetail] = React.useState(false);

    return (
        <>
            {
                photoDetail && (
                    <div className="mt-64 mb-24 mx-24 xl:mx-44">
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                        Título</p>
                        <p className='text-xl' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                    </div>
                )
            }
            {
            !photoDetail && (
                <div className='mt-64 mb-24 mx-24 xl:mx-44'>
                    <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                        Galeria de Fotos</p>
                    <div className='grid grid-cols-3 gap-6 justify-items-center'>
                        <div className="" onClick={() => setPhotoDetail(true)}>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-auto h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
        
        
    )
}
