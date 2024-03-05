import React from 'react'
import image1 from '../assets/fourByfour.png'
import image2 from '../assets/sixteenByeight.png'
import { Header } from './Header'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import Materia1 from '../assets/Materia1/foto 1 e capa.jpg'
import Materia2 from '../assets/Materia2/foto 1 e capa.jpg'
import Galeria from '../assets/Fotos1/Capa do álbum.png'
import quizImage from '../assets/quizz foto.jpg'
import { useSessionStorage } from 'usehooks-ts'


export const Home = () => {
    const [photoDetail, setPhotoDetail] = useSessionStorage('photoDetail', '');

    // clicar na galeria ir direto pras fotos do dia 11/02/24
    // separar as fotos com uma haste

    return (
        <>
            <Header currentPage='' />
            <div className='mt-64'>
                <div className='mx-24 my-10'>
                    <div className='flex'>
                        <Link to={'/subjects'}>
                            <div className="relative">
                                <img src={Materia1} alt="logo" className="w-screen object-cover" style={{height: '400px'}} />
                                <div className="absolute bottom-8 left-10 mr-9">
                                    <p className='text-lg font-bold bg-white' style={{ color: '#254E22', fontFamily: 'barlowBold'}}>MATÉRIAS</p>
                                    <p className='text-3xl font-bold mt-4' style={{ color: '#FFF', fontFamily: 'barlowBold'}}>“O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela</p>
                                    <p className='text-sm font-bold mt-4' style={{ color: '#FFF', fontFamily: 'barlowBold'}}>O influenciador explicou a motivação para a criação do canal e a dedicação em dar voz ao futebol amador maringaense</p>
                                </div>
                            </div>
                        </Link>
                        <div className='gap-2 flex-row'>
                            <Link to={'/gallery'}>
                            <div className="relative">
                                <img src={Galeria} alt="logo" className="w-screen object-cover object-right-top" style={{height: '200px'}} />
                                <div className="absolute bottom-6 left-6 mr-9">
                                    <p className='text-lg font-bold' style={{ color: '#254E22', fontFamily: 'barlowBold'}}>GALERIA DE FOTOS</p>
                                    <p className='text-3xl font-bold mt-1' style={{ color: '#FFF', fontFamily: 'barlowBold'}}>Copa Ricardo Gordo | 11/02/24 | Sarandi-PR</p>
                                </div>
                            </div>
                            </Link>
                            <Link to={'/fanarea'}>
                            <div className="relative">
                                <img src={quizImage} alt="logo" className="w-screen object-cover" style={{height: '200px'}} />
                                <div className="absolute bottom-4 left-4">
                                    <p className='text-lg font-bold' style={{ color: '#254E22', fontFamily: 'barlowBold'}}>ÁREA DO TORCEDOR - QUIZ</p>
                                    <p className='text-lg font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>O que você sabe sobre a Copa Land View?</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mx-24" style={{backgroundColor: "#254E22"}}></div>

                <div className='mx-24 my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>
                
                <Link to={'/subjectcontentInterview'}>
                    <div className='flex mx-24 my-10'>
                        <img src={Materia1} alt="logo" className="logoImage" style={{height: '250px', width: '350px'}} />
                        <div className="ml-5">
                            <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'barlowBold'}}>MATÉRIAS</p>
                            <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'barlowBold'}}>“O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela</p>
                            <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>18/02/2024</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/subjectcontentProfessor'}>
                    <div className='flex mx-24 my-10'>
                        <img src={Materia2} alt="logo" className="logoImage" style={{height: '250px', width: '350px'}} />
                        <div className="ml-5">
                            <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'barlowBold'}}>MATÉRIAS</p>
                            <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'barlowBold'}}>Professor Preto: “A Amistosos é como se fosse um filho para mim”</p>
                            <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>18/02/2024</p>
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    )
}