import React from 'react'
import image1 from '../assets/fourByfour.png'
import image2 from '../assets/sixteenByeight.png'
import { Header } from './Header'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <Header currentPage='' />
            <div className='mt-64'>
                <div className='mx-24 my-10'>
                    <div className='flex'>
                        <Link to={'/subjects'}>
                            <div className="relative">
                                <img src={image1} alt="logo" className="w-screen" style={{height: '400px'}} />
                                <div className="absolute bottom-4 left-4">
                                    <p className='text-lg font-bold' style={{ color: '#254E22', fontFamily: 'Barlow'}}>MATÉRIAS</p>
                                    <p className='text-6xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                    <p className='text-2xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                        </Link>    
                        <div className='gap-2 flex-row'>
                            <div className="relative">
                                <img src={image2} alt="logo" className="w-screen" style={{height: '200px'}} />
                                <div className="absolute bottom-4 left-4">
                                    <p className='text-lg font-bold' style={{ color: '#254E22', fontFamily: 'Barlow'}}>GALERIA DE FOTOS</p>
                                    <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                    <p className='text-lg font-bold' style={{ color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={image2} alt="logo" className="w-screen" style={{height: '200px'}} />
                                <div className="absolute bottom-4 left-4">
                                    <p className='text-lg font-bold' style={{ color: '#254E22', fontFamily: 'Barlow'}}>ÁREA DO TORCEDOR - QUIZ</p>
                                    <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                                    <p className='text-2xl font-bold' style={{ color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mx-24" style={{backgroundColor: "#254E22"}}></div>

                <div className='mx-24 my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>

                <div className='flex mx-24 my-10'>
                    <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} />
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
                <div className='flex mx-24 my-10'>
                    <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} />
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}