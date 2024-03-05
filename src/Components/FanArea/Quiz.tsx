import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Carousel } from 'antd';

export const Quiz = () => {

    const contentStyle: React.CSSProperties = {
        height: '450px',
        background: '#f5e6db',
      };

    return (
        <>
        <Header currentPage='AREA DO TORCEDOR'/>
            <div className='mt-48 mb-24 mx-24 xl:mx-44'>
                <div className="grid">
                    <p className='font-bold text-6xl my-3 gray fill-cyan-700' style={{color: '#292822', fontFamily: 'barlowBold'}}>Quizz</p>
                    <div className="flex">
                        <p className='text-2xl font-bold ml-auto' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>
                            <span>
                                {'00'}
                            </span>
                             /05 respondidas - &nbsp; 
                             <span>
                                    {'0'}
                             </span>
                             &nbsp; Acertos </p>
                    </div>
                </div>
            <Carousel dots={{className: 'black'}} className='p-2'>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>Qual edição da Copa Land View está acontecendo neste primeiro semestre de 2024?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>Quem foi o último campeão da 1ª Divisão da Copa Land View?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>A Copa Land View possui quantas divisões?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>Quantos times participam da Copa Land View, contando todas as divisões?</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>Qual equipe é a maior campeã da 1ª Divisão da Copa Land View</p>
                        </div>
                    </div>
                </div>
            </Carousel>

            <div className="border-2 mt-10" style={{borderColor: 'gray'}}></div>
                
                <p className='font-bold text-4xl py-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Comente!</p>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24" style={{color: '#AA591C'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'barlowRegular'}}>Você</p>
                        <p className='text-lg' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Comente aqui</p>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}