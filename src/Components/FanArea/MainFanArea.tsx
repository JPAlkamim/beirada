import React from 'react'
import BolaFutebol from '../../assets/bolaFutebol.svg'
import Futebol from '../../assets/futebol.png'
import { Button, message } from 'antd'
import { useSessionStorage } from 'usehooks-ts'
import quizImage from '../../assets/quizz foto.jpg'
import time1 from '../../assets/palpites tio nenê.png'
import time2 from '../../assets/palpites araucária fc.png'
import { Link } from 'react-router-dom'

export const MainFanArea = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [rewards, setRewards] = useSessionStorage('rewards', {
        1: false,
        2: false,
        3: false,
    });
    const [points, setPoints] = useSessionStorage('points', 0);
    const [fanAreaType, setFanAreaType] = useSessionStorage('fanAreaType', '');

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Recompensa adquirida!',
        });
    }

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Pontos insuficientes!',
        });
    }

    const handleWallpaper = () => {
        if (rewards[1] === true) return
        if (points < 20) {
            error()
            return
        } else {
            setRewards({...rewards, 1: true})
            setPoints(points - 20)
            success()
        }
    }

    const handleIngresso = () => {
        if (rewards[2] === true) return
        if (points < 250) {
            error()
            return
        } else {
            setRewards({...rewards, 2: true})
            setPoints(points - 250)
            success()
        }
    }

    const handleCamisa = () => {
        if (rewards[3] === true) return
        if (points < 500) {
            error()
            return
        } else {
            setRewards({...rewards, 3: true})
            setPoints(points - 500)
            success()
        }
    }

    return (
        <>
        {contextHolder}
        <div className='mt-48 mb-24 mx-24 xl:mx-44'>
            <p className='font-bold text-4xl my-3' style={{color: '#292822', fontFamily: 'barlowBold'}}>Área do Torcedor</p>
            <p className=' text-xl my-1' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Responda quizzes, participe de enquetes e dê alguns palpites para ganhar pontos!</p>
            <p className=' text-xl my-1' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Depois, troque seus pontos por recompensas. Quanto mais participar melhor!</p>
            <p className=' text-xl my-2 flex' style={{color: '#AA591C', fontFamily: 'barlowRegular'}}>
                Você pode acompanhar seus pontos e suas recompensas na aba&nbsp;
                    <Link className='cursor-pointer' to={'/profile'}>
                        <p>"Perfil"</p>
                    </Link>
            </p>
            <div className="border-2" style={{borderColor: 'black'}}></div>
            <p className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'barlowBold'}}>Quizzes</p>
            <div className="relative mb-8 w-4/5">
                <img src={quizImage} alt="logo" className="w-full object-cover" style={{height: '200px'}} />
                <div className="absolute bottom-4 left-4">
                    <p className='text-lg font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>O que você sabe sobre a Copa Land View?</p>
                </div>
                <div className='absolute bottom-4 right-4'>
                    <p className='text-base ml-2' style={{ color: '#292822', fontFamily: 'barlowBold'}}>00 / 10 respondidas - 0 Acertos </p>
                    <Button className='m-2 w-44 font-bold justify-self-end rounded-none'
                                type="primary"
                                onClick={() => setFanAreaType('QUIZ')}
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>INICIAR AGORA</Button>
                </div>
            </div>
            <div className="border-2" style={{borderColor: 'black'}}></div>

            <div className='grid grid-cols-6 gap-6 mt-4'>
                <div className='col-span-3'>
                    <div className="flex">
                        <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>Enquetes</p>
                        <div className="ml-auto" onClick={() => setFanAreaType('SURVEY')}>
                            <p className='cursor-pointer font-bold text-lg mt-3' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>Participe de outras enquetes &gt; </p>
                        </div>
                    </div>
                    <div className='mt-2 border-4 p-4 h-80' style={{borderColor: '#AA591C'}}>
                        <p className='text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Maringá</p>
                        <p className='text-2xl font-bold mb-2' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Quem será o campeão da Copa Land View 1ª Divisão Semestre I 2024?</p>
                        <div className='mt-16 grid grid-cols-2 gap-4'>
                            <button className=' text-white font-bold p-2' style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C'}}>Inimigos do ET FC</button>
                            <button className=' text-white font-bold p-2' style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C'}}>Tamo Junto FC</button>
                            <button className=' text-white font-bold p-2' style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C'}}>S.E. Parisnacity</button>
                            <button className=' text-white font-bold p-2' style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C'}}>Outros</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex">
                        <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>Palpites</p>
                        <div className="ml-auto" onClick={() => setFanAreaType('GUESS')}>
                            <p className='cursor-pointer font-bold text-lg mt-3' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>Dê outros palpites &gt; </p>
                        </div>
                    </div>
                    <div className='grid mt-2 border-4 p-2 h-80' style={{borderColor: '#AA591C'}}>
                        <div className=''>
                            <p className='text-center text-base' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Copa Land View - Semestre | 2024</p>
                            <p className='text-center text-base' style={{color: '#292822', fontFamily: 'barlowRegular'}}>17/02/2024 | 10h</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={time1} alt="time1" className="w-20 h-24" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-20">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            <img src={time2} alt="time2" className="w-20 h-24" />
                        </div>
                        <div className="border-2 mx-10 mt-4" style={{borderColor: 'gray'}}></div>
                        <ul className='text-start mx-8 mt-2'>
                            <li className='text-base flex' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                Qual vai ser o placar final da partida? 4 <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                style={{color: '#292822'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg></li> 
                            <li className='text-base flex' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                Quantos cartões amarelos terão na partida? 2 <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                style={{color: '#292822'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg></li>
                            <li className='text-base flex' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                                Quantas faltas terão na partida? 5 <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                style={{color: '#292822'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg></li>
                        </ul>
                        <Button className='m-2 w-44 font-bold justify-self-end'
                                type="primary"
                                onClick={() => setFanAreaType('GUESS')}
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>PALPITAR AGORA</Button>
                    </div>
                </div>
            </div>
            <p className='font-bold text-4xl my-3' style={{color: '#292822', fontFamily: 'barlowBold'}}>Recompensas</p>
            <div className="border-4 mt-2" style={{borderColor: '#AA591C'}}></div>
            <div className='mt-4 grid grid-cols-3 gap-6 justify-items-center'>
                <div className=''>
                    <img src={Futebol} alt="subject" className="w-auto h-56" />
                    <div className="grid justify-center">
                        <p className='text-2xl font-bold text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Wallpaper</p>
                        <div className="flex justify-center">
                            <p className='text-2xl text-center' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>20 </p>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="w-10 h-8"
                                    style={{color: '#254E22'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <Button className='mt-2 w-44 font-bold'
                                type="primary"
                                onClick={handleWallpaper}
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>
                            {rewards[1] ? 'JÁ ADIQUIRIDO' : 'ADIQUIRIR'}
                        </Button>
                    </div>
                </div>
                <div className=''>
                    <svg style={{color: '#AA591C'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-50 h-56">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                    </svg>
                    <div className="grid justify-center">
                        <p className='text-2xl font-bold text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Ingresso Jogo X</p>
                        <div className="flex justify-center">
                            <p className='text-2xl text-center' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>250 </p>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="w-10 h-8"
                                    style={{color: '#254E22'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <Button className='mt-2 w-44 font-bold'
                                type="primary"
                                onClick={handleIngresso}
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>
                                {rewards[2] ? 'JÁ ADIQUIRIDO' : 'ADIQUIRIR'}
                                </Button>
                    </div>
                </div>
                <div className=''>
                    <svg style={{color: '#AA591C'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-50 h-56">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div className="grid justify-center">
                        <p className='text-2xl font-bold text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Camisa Time X</p>
                        <div className="flex justify-center">
                            <p className='text-2xl text-center' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>500 </p>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="w-10 h-8"
                                    style={{color: '#254E22'}}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <Button className='mt-2 w-44 font-bold'
                                type="primary"
                                onClick={handleCamisa}
                                style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>{
                                    rewards[3] ? 'JÁ ADIQUIRIDO' : 'ADIQUIRIR'
                                }</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}