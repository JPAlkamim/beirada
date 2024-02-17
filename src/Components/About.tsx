import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import FelippePhoto from '../../public/Felippe.jpg'

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
                        <img src={FelippePhoto} alt="Felippe Augusto Gabriel" className="w-32 h-44 rounded-full mr-10" />
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