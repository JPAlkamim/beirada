import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import audio1 from '../../assets/audios/EntrevistaTioLuiz.wav'
import audio2 from '../../assets/audios/EntrevistaProfessorPreto.wav'
import audio3 from '../../assets/audios/EntrevistaEverson.wav'
// @ts-ignore
import useSound from 'use-sound'
import Materia1 from '../../assets/Materia1/foto 1 e capa.jpg'
import Materia2 from '../../assets/Materia2/foto 1 e capa.jpg'
import Materia3 from '../../assets/Materia3/foto 1.jpg'


export const GalleryAudios = () => {
    const [playSound1, stopAudio1] = useSound(audio1, {volume: 0.2})
    const [playSound2, stopAudio2] = useSound(audio2, {volume: 0.2})
    const [playSound3, stopAudio3] = useSound(audio3, {volume: 0.2})
    const [isPlaying1, setIsPlaying1] = React.useState(false)
    const [isPlaying2, setIsPlaying2] = React.useState(false)
    const [isPlaying3, setIsPlaying3] = React.useState(false)
    const [isPLaying, setIsPlaying] = React.useState(false)

    const buttonStyles = {
        padding: '12px 24px',
        fontSize: '18px',
        background: '#254E22',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.2s, transform 0.2s',
      };

    const stopAll = () => {
        setIsPlaying1(false)
        setIsPlaying2(false)
        setIsPlaying3(false)
        setIsPlaying(false)
    }

    const handlePlay1 = () => {
        console.log(isPLaying)
        if (isPLaying) {
            stopAudio1.stop()
            stopAll()
        } else {
            playSound1()
            setIsPlaying(true)
            setIsPlaying1(true)
        }
    }

    const handlePlay2 = () => {
        if (isPLaying) {
            stopAudio2.stop()
            stopAll()
        } else {
            playSound2()
            setIsPlaying(true)
            setIsPlaying2(true)
        }
    }

    const handlePlay3 = () => {
        console.log(isPLaying)
        if (isPLaying) {
            stopAudio3.stop()
            stopAll()
        } else {
            playSound3()
            setIsPlaying(true)
            setIsPlaying3(true)
        }
    }

    return (
        <div className='mt-64 mb-40 mx-24'>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
            <div>
                <img src={Materia1} alt="Materia3" className="h-48 rounded-2xl" />
                <button
                    onClick={handlePlay1}
                    className='mt-4 m-auto flex '
                    style={{ ...buttonStyles }}
                    onMouseEnter={() => {
                    document.body.style.cursor = 'pointer';
                    }}
                    onMouseLeave={() => {
                    document.body.style.cursor = 'auto';
                    }}
                >
                    {
                        isPlaying1 && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>

                        )
                    }
                    {
                        !isPlaying1  && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>
                        )
                    }
                </button>
                <div className="grid justify-center">
                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                    “O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela</p>
                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                    O influenciador explicou a motivação para a criação do canal e a dedicação em dar voz ao futebol amador maringaense
                    </p>
                </div>
            </div>
            <div>
                <img src={Materia2} alt="Materia3" className="h-48 rounded-2xl" />
                <button
                    onClick={handlePlay2}
                    className='mt-4 m-auto flex'
                    style={{ ...buttonStyles }}
                    onMouseEnter={() => {
                    document.body.style.cursor = 'pointer';
                    }}
                    onMouseLeave={() => {
                    document.body.style.cursor = 'auto';
                    }}
                >
                    {
                        isPlaying2 && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>

                        )
                    }
                    {
                        !isPlaying2  && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>
                        )
                    }
                </button>
                <div className="grid justify-center">
                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                    Professor Preto: “A Amistosos é como se fosse um filho para mim”</p>
                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                    Idealizador da Amistosos Eventos, Professor Preto contou como se orgulha do projeto e de como o futebol é parte importante de sua vida</p>
                </div>
            </div>
            <div>
                <img src={Materia3} alt="Materia3" className="h-48 rounded-2xl" />
                <button
                    onClick={handlePlay3}
                    className='mt-4 m-auto flex'
                    style={{ ...buttonStyles }}
                    onMouseEnter={() => {
                    document.body.style.cursor = 'pointer';
                    }}
                    onMouseLeave={() => {
                    document.body.style.cursor = 'auto';
                    }}
                >
                    {
                        isPlaying3 && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>

                        )
                    }
                    {
                        !isPlaying3  && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>
                        )
                    }
                </button>
                <div className="grid justify-center">
                    <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                    Entrevista com Everson Natalino, organizador da Copa Ricardo Gordo </p>
                    <p className='text-base text-center italic' style={{color: '#292822', fontFamily: 'barlowItalic'}}>
                    A competição reúne diversas equipes amadoras das cidades de Sarandi e Marialva e movimenta a comunidade em torno do futebol </p>
                </div>
            </div>
            </div>
        </div>
    )
}