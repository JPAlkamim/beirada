import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from 'antd';
import Footbal from '../assets/futebol.png';
import { useSessionStorage } from 'usehooks-ts';
import ballSoccer from '../assets/ballSoccer.svg';

export const Profile = () => {
    const [rewards, setRewards] = useSessionStorage('rewards', {
        1: false,
        2: false,
        3: false,
    });
    const [points, setPoints] = useSessionStorage('points', 0);

    return (
        <>
            <Header />
            <div>
                <div className="grid grid-cols-6 mx-24 mt-48 mb-8 gap-6 ">
                    <div className='col-span-2'>
                        <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Minha Conta</p>
                        <div className='grid border-4 border-gray-950 p-4 gap-y-3'>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                <span className='font-bold'>Nome:</span> Felippe
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                <span className='font-bold'>Sobrenome:</span> Augusto Gabriel
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                <span className='font-bold'>Email:</span> algumacoisa@gmail.com
                            </p>
                            <p className='text-lg' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                <span className='font-bold'>Senha:</span> **********
                            </p>
                            <Button className='m-2 w-44 font-bold justify-self-end'
                                type="primary"
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>ALTERAR SENHA</Button>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <p className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Meus Pontos</p>
                        <div className="border-8" style={{borderColor: '#AA591C'}}></div>
                        <div className='flex my-8'>
                            <p className='font-bold text-2xl pr-2' style={{color: '#AA591C', fontFamily: 'barlowBold'}}>TOTAL: </p>
                            <p className='font-bold text-2xl pr-2'> {points} </p>
                            <img src={ballSoccer} alt="bola de futebol" className="w-8 h-8" />
                        </div>
                        <p className='font-bold text-2xl pr-2 border-b-2' style={{borderColor: '#AA591C', color: '#AA591C', fontFamily: 'barlowBold'}}>MINHAS RECOMPENSAS: </p>
                        {
                            rewards[1] && (
                                <>
                                    <div className='my-8 flex gap-4 relative'>
                                        <img src={Footbal} alt="futebol" className="w-32 h-44" />
                                        <div>
                                            <p className="text-xl" style={{color: '#292822', fontFamily: 'barlowRegular'}}>DATA</p>
                                            <div>
                                                <p className='absolute bottom-1 font-bold text-2xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>Wallpaper</p>
                                            </div>
                                            <Button className='absolute bottom-0 right-0 w-32'
                                                type="primary"
                                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>
                                                    <div className="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                    <p>BAIXAR</p>
                                                    </div>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="border-2" style={{borderColor: 'gray'}}></div>
                                </>
                            )
                        }
                        {
                            rewards[2] && (
                                <>
                                    <div className='my-8 flex gap-4 relative'>
                                    <svg style={{color: '#AA591C'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-50 h-28">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                    </svg>
                                        <div>
                                            <p className="text-xl" style={{color: '#292822', fontFamily: 'barlowRegular'}}>DATA</p>
                                            <p className='absolute bottom-1 font-bold text-2xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>Ingresso Jogo X</p>
                                        </div>
                                        <Button className='absolute bottom-0 right-0 w-32'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>
                                                <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                                <p>BAIXAR</p>
                                                </div>
                                        </Button>
                                    </div>
                                    <div className="border-2" style={{borderColor: 'gray'}}></div>
                                </>
                            )
                        }
                        {
                            rewards[3] && (
                                <>
                                    <div className='my-8 flex gap-4 relative'>
                                    <svg style={{color: '#AA591C'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-50 h-28">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                        <div>
                                            <p className="text-xl" style={{color: '#292822', fontFamily: 'barlowRegular'}}>DATA</p>
                                            <p className='absolute bottom-1 font-bold text-2xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>Camisa Time X</p>
                                        </div>
                                        <Button className='absolute bottom-0 right-0 w-32'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>
                                                <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                                <p>BAIXAR</p>
                                                </div>
                                        </Button>
                                    </div>
                                    <div className="border-2" style={{borderColor: 'gray'}}></div>
                                </>
                            )
                        }

                    </div>
                </div> 
            </div>
            <Footer />
        </>
    )
}