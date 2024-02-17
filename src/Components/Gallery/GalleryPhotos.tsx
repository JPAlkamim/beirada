import React from 'react'
import image1 from '../../assets/fourByfour.png'
import { Link } from 'react-router-dom'
import PhotoAlbum from 'react-photo-album';
import { useSessionStorage } from 'usehooks-ts';


export const GalleryPhotos = () => {
    const [photoDetail, setPhotoDetail] = useSessionStorage('photoDetail', false);

    const photos = [
        { src:  "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80", width: 2500, height: 1600 },
        { src: "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80", width: 1000, height: 900 },
        {
            src:
              "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80",
              width: 2500, height: 1600
          },
          {
            src:
              "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80",
              width: 1600, height: 900
          },
          {
            src:
              "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80",
              width: 1600, height: 900
          },
          {
            src:
              "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
              width: 1600, height: 900
          },
          {
            src:
              "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
              width: 1600, height: 900
          }
    ]

    return (
        <>
            {
                photoDetail && (
                    <div className="mt-52 mb-24 mx-24 xl:mx-44">
                        <div className="">
                            <svg onClick={() => setPhotoDetail(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </div>
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                        Título</p>
                        <div className="flex">
                            <div className="mr-auto">
                            <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                            <p className='text-xl font-bold mb-5' style={{color: '#AA591C', fontFamily: 'Barlow'}}>Contribua para este álbum</p>
                        </div>

                        <PhotoAlbum layout='rows' photos={photos} />

                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                        Contribua com este álbum!</p>
                        <p className='text-xl mb-5' style={{color: '#292822', fontFamily: 'Barlow'}}>Faça o upload de suas fotos e vídeos sobre este jogo para enriquecer ainda mais o conteúdo.</p>
                    </div>
                )
            }
            {
            !photoDetail && (
                <div className='mt-64 mb-24 mx-24 xl:mx-44'>
                    <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                        Galeria de Fotos</p>
                    <div className='grid grid-cols-3 gap-6 justify-items-center'>
                        <div className="cursor-pointer" onClick={() => setPhotoDetail(true)}>
                            <img src={"https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80"} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                            <div className="grid justify-center">
                                <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
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
