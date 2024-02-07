import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Subject from '../assets/subject.png';
import image1 from '../assets/fourByfour.png'

export const SubjectContent = () => {
    return (
        <>
            <Header currentPage='MATERIAS'/>
            <div className='pt-48 mx-24 xl:mx-64 grid'>
                <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'Barlow'}}>Título da matéria</p>
                <p className='text-xl' style={{color: '#737373', fontFamily: 'Barlow'}}>Linha fina</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Autor | Data</p>
                <img src={Subject} alt="subject" className="mx-auto" />
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <div className="border-2" style={{borderColor: 'gray'}}></div>
                
                <p className='font-bold text-4xl py-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Comente!</p>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24" style={{color: '#AA591C'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'Barlow'}}>Você</p>
                        <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Aqui é pra escrever alguma coisa?</p>
                    </div>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24" style={{color: '#AA591C'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'Barlow'}}>xxxxxxxxxxxxxx</p>
                        <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Foi um jogaço.</p>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mt-10" style={{backgroundColor: "#254E22"}}></div>

                <div className='my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>

                <div className='flex my-2'>
                    <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} />
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
                <div className='flex my-10'>
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