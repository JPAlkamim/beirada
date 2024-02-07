import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const About = () => {
    return (
        <>
            <Header currentPage='SOBRE' />
            <div className='mt-64'>
                <div className="mx-24 my-44 grid justify-items-center">
                    <p className='text-6xl font-bold mr-auto' style={{ color: '#292822', fontFamily: 'Barlow'}}>Sobre o Beirada</p>
                    <p className='text-2xl mt-4 text-left' style={{ color: '#292822', fontFamily: 'Barlow'}}>O Beirada é um produto desenvolvido para a disciplina de Planejamento e Produção em Multimeios do curso de Comunicação e Multimeios da Universidade Estadual de Maringá (UEM). É um espaço focado na cobertura jornalística do futebol amador, com o objetivo de dar visibilidade à esfera da prática esportiva, que carece de meios que o divulgue. O Beirada busca transmitir a paixão das multidões pelo futebol amador, através das histórias desses personagens.</p>
                </div>
                <div className="mx-24 my-44 grid justify-items-center">
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-64 h-24" style={{color: '#AA591C'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <div>
                            <p className='text-6xl font-bold mr-auto' style={{ color: '#292822', fontFamily: 'Barlow'}}>Sobre o autor</p>
                            <p className='text-2xl mt-4 text-left' style={{ color: '#292822', fontFamily: 'Barlow'}}>Me chamo Felippe Augusto Gabriel, sou estudante do 4º ano do curso de Comunicação e Multimeios da UEM e sou estagiário na área do jornalismo. Corinthiano e apaixonado por futebol, tenho o sonho de me tornar um jornalista esportivo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}