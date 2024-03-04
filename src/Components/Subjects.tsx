import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Materia1 from '../assets/Materia1/foto 1 e capa.jpg';
import Materia2 from '../assets/Materia2/foto 1 e capa.jpg';
import Materia3 from '../assets/Materia3/foto 1.jpg';
import { Link } from 'react-router-dom';
import Subject from '../assets/subject.png';

export const Subjects = () => {
    return (
        <>
            <Header currentPage='MATERIAS'/>
                <div className='overflow-auto h-fit mt-44'>
                    <div className='mx-24 xl:mx-44'>
                        <p className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Matérias</p>
                        <div className='grid grid-cols-3 gap-6 justify-items-center mt-20 mb-32'>
                            <Link className='' to={'/subjectcontentInterview'}>
                                <img src={Materia1} alt="Materia1" className="h-56 m-auto" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                                    “O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela</p>
                                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                                    O influenciador explicou a motivação para a criação do canal e a dedicação em dar voz ao futebol amador maringaense
                                    </p>
                                </div>
                            </Link>
                            <Link className='' to={'/subjectcontentProfessor'}>
                                <img src={Materia2} alt="Materia1" className="h-56 m-auto" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                                    Professor Preto: “A Amistosos é como se fosse um filho para mim”</p>
                                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                                    Idealizador da Amistosos Eventos, Professor Preto contou como se orgulha do projeto e de como o futebol é parte importante de sua vida</p>
                                </div>
                            </Link>
                            <Link className='' to={'/subjectcontentEverson'}>
                                <img src={Materia3} alt="Materia3" className="h-56 m-auto" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                                    Entrevista com Everson Natalino, organizador da Copa Ricardo Gordo </p>
                                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                                    A competição reúne diversas equipes amadoras das cidades de Sarandi e Marialva e movimenta a comunidade em torno do futebol </p>
                                </div>
                            </Link>
                            {/* <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div>
                            <div className=''>
                                <img src={Subject} alt="Subject" className="w-auto h-56" />
                                <div className="grid justify-center">
                                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>Título da matéria</p>
                                    <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'barlowItalic'}}>Resumo</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}