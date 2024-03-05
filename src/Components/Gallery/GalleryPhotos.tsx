import React from 'react'
import image1 from '../../assets/fourByfour.png'
import { Link } from 'react-router-dom'
import PhotoAlbum from 'react-photo-album';
import { useSessionStorage } from 'usehooks-ts';
import images from '../GalleryAbum1'
import images2 from '../GalleryAlbum2'
import capa1 from '../../assets/Fotos1/Capa do álbum.png'
import capa2 from '../../assets/Fotos2/Capa do álbum.png'


export const GalleryPhotos = () => {
    const [photoDetail, setPhotoDetail] = useSessionStorage('photoDetail', '');

    return (
        <>
            {
                photoDetail == 'Gallery1' && (
                    <div className="mt-52 mb-24 mx-24 xl:mx-44">
                        <div className="">
                            <svg onClick={() => setPhotoDetail('')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </div>
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                        Copa Ricardo Gordo | 11/02/24 | Sarandi-PR</p>
                        <div className="flex">
                            <div className="mr-auto">
                            <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Califórnia FC x Monte Rei e Nego Stylo x Seg Amaral se enfrentaram pela Copa Ricardo Gordo de Futebol Suíço, na Arena Barba Rala, em Sarandi-PR
                            </p>
                            </div>
                        </div>
                        <div className="grid">
                            <p className='text-xl font-bold ml-auto mb-5' style={{color: '#AA591C', fontFamily: 'barlowRegular'}}>Contribua para este álbum</p>
                        </div>

                        <PhotoAlbum layout='rows' photos={images}/>

                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                        Contribua com este álbum!</p>
                        <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Faça o upload de suas fotos e vídeos sobre este jogo para enriquecer ainda mais o conteúdo.</p>
                    </div>
                )
            }
            {
                photoDetail == 'Gallery2' && (
                    <div className="mt-52 mb-24 mx-24 xl:mx-44">
                        <div className="">
                            <svg onClick={() => setPhotoDetail('')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </div>
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                        Copa Land View | 18/02/24 | Maringá-PR</p>
                        <div className="flex">
                            <div className="mr-auto">
                            <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'barlowRegular'}}>O Bigbol Society, em Maringá-PR, recebeu o primeiro dia de competições da Copa Land View, organizada pela Amistosos Eventos
                            </p>
                            </div>
                        </div>
                        <div className="grid">
                            <p className='text-xl font-bold ml-auto mb-5' style={{color: '#AA591C', fontFamily: 'barlowRegular'}}>Contribua para este álbum</p>
                        </div>

                        <PhotoAlbum layout='rows' photos={images2} />

                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                        Contribua com este álbum!</p>
                        <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Faça o upload de suas fotos e vídeos sobre este jogo para enriquecer ainda mais o conteúdo.</p>
                    </div>
                )
            }
            {
            photoDetail == '' && (
                <div className='mt-52 mb-40 mx-24 xl:mx-44'>
                    <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                        Galeria de Fotos</p>
                    <div className='grid grid-cols-2 gap-32 justify-items-center mt-20'>
                        <div className="cursor-pointer" onClick={() => setPhotoDetail('Gallery1')}>
                            <img src={capa1} alt="image1" className="h-72 m-auto transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center mt-4">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Copa Ricardo Gordo | 11/02/24 | Sarandi-PR</p>
                                <p className='text-base text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Califórnia FC x Monte Rei e Nego Stylo x Seg Amaral se enfrentaram pela Copa Ricardo Gordo de Futebol Suíço, na Arena Barba Rala, em Sarandi-PR
                                </p>
                            </div>
                        </div>
                        <div className="cursor-pointer" onClick={() => setPhotoDetail('Gallery2')}>
                            <img src={capa2} alt="image1" className="h-72 m-auto transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center mt-4">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Copa Land View | 18/02/24 | Maringá-PR</p>
                                <p className='text-base text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>O Bigbol Society, em Maringá-PR, recebeu o primeiro dia de competições da Copa Land View, organizada pela Amistosos Eventos</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
        
        
    )
}
