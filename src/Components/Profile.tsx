import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from 'antd';
import Footbal from '../assets/futebol.png';

export const Profile = () => {
    return (
        <>
            <Header />
            <div>
                <div className="grid grid-cols-6 mx-24 my-56 gap-6 ">
                    <div className='col-span-2'>
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Minha Conta</p>
                        <div className='grid border-4 border-gray-950 p-4 gap-y-3'>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>
                                <span className='font-bold'>Nome:</span> Felippe
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>
                                <span className='font-bold'>Sobrenome:</span> Augusto Gabriel
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>
                                <span className='font-bold'>Email:</span> algumacoisa@gmail.com
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>
                                <span className='font-bold'>Senha:</span> **********
                            </p>
                            <Button className='m-2 w-44 font-bold justify-self-end'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>ALTERAR SENHA</Button>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Meus Pontos</p>
                        <div className="border-8" style={{borderColor: '#AA591C'}}></div>
                        <div className='flex my-4'>
                            <p className='font-bold text-2xl pr-2' style={{color: '#AA591C', fontFamily: 'Barlow'}}>TOTAL: </p>
                            <p className='font-bold text-2xl pr-2'> 13 </p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <p className='font-bold text-2xl pr-2 border-b-2' style={{borderColor: '#AA591C', color: '#AA591C', fontFamily: 'Barlow'}}>MINHAS RECOMPENSAS: </p>
                        <div className='my-8 flex gap-4 relative'>
                            <img src={Footbal} alt="futebol" className="w-32 h-50" />
                            <div>
                                <p className="text-xl" style={{color: '#292822', fontFamily: 'Barlow'}}>DATA</p>
                                <p className='absolute bottom-1 font-bold text-2xl' style={{color: '#292822', fontFamily: 'Barlow'}}>Wallpaper</p>
                            </div>
                        </div>
                        <div className="border-2" style={{borderColor: 'gray'}}></div>

                    </div>
                </div> 
            </div>
            <Footer />
        </>
    )
}