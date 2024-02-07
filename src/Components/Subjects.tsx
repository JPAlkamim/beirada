import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Subject from '../assets/subject.png';
import { Link } from 'react-router-dom';

export const Subjects = () => {
    return (
        <>
            <Header currentPage='MATERIAS'/>
                <div className='overflow-auto h-fit mt-44'>
                    <div className='mx-24 xl:mx-44'>
                        <p className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Matérias</p>
                        <div className='grid grid-cols-3 gap-6 justify-items-center'>
                            <Link className='' to={'/subjectcontent'}>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </Link>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}