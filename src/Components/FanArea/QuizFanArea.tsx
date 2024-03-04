import React from 'react';
import image2 from '../../assets/sixteenByeight.png'
import { Button, message } from 'antd';
import { useSessionStorage } from 'usehooks-ts';
import quizImage from '../../assets/quizz foto.jpg'


export const QuizFanArea = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [value, setValue] = useSessionStorage('user', false);
    const [points, setPoints] = useSessionStorage('points', 0);

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Nenhuma conta logada!',
        });
    }

    const handleInitQuiz = () => {
        if (value) {
            setPoints(points + 100);
        } else {
            error()
        }
    }

    return (
        <>
            {contextHolder}
            <div className='mt-48 mb-24 mx-24 xl:mx-44'>
                <p className='font-bold text-4xl my-3 text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Quizzes</p>
                <div className="relative mb-8 w-4/5 m-auto">
                    <img src={quizImage} alt="logo" className="w-full object-cover" style={{height: '200px'}} />
                    <div className="absolute bottom-4 left-4">
                    <p className='text-lg font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowBold'}}>O que você sabe sobre a Copa Land View?</p>
                    </div>
                    <div className='absolute bottom-4 right-4'>
                        <p className='text-base ml-2' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>00 / 10 respondidas - 0 Acertos </p>
                        <Button className='m-2 w-44 font-bold justify-self-end rounded-none'
                                    type="primary"
                                    onClick={handleInitQuiz}
                                    style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>INICIAR AGORA</Button>
                    </div>
                </div>
                <div className="relative mb-8 w-4/5 m-auto">
                    <img src={image2} alt="logo" className="w-full" style={{height: '200px'}} />
                    <div className="absolute bottom-4 left-4">
                        <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Título</p>
                        <p className='text-2xl font-bold' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Descrição</p>
                    </div>
                    <div style={{backgroundColor: 'rgba(170,89,28,0.5)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='w-full h-full inline-flex flex-col items-center justify-center absolute text-center'>
                        <p className='text-base' style={{ color: '#FCF9F7', fontFamily: 'barlowRegular'}}>10 / 10 respondidas - 8 Acertos </p>
                        <p className='text-2xl' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Você ganhou - pontos</p>
                    </div>
                </div>
                <div className="relative mb-8 w-4/5 m-auto">
                    <img src={image2} alt="logo" className="w-full" style={{height: '200px'}} />
                    <div className="absolute bottom-4 left-4">
                        <p className='text-3xl font-bold mt-1' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Título</p>
                        <p className='text-2xl font-bold' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Descrição</p>
                    </div>
                    <div style={{backgroundColor: 'rgba(170,89,28,0.5)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='w-full h-full inline-flex flex-col items-center justify-center absolute text-center'>
                        <p className='text-base' style={{ color: '#FCF9F7', fontFamily: 'barlowRegular'}}>10 / 10 respondidas - 8 Acertos </p>
                        <p className='text-2xl' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>Você ganhou - pontos</p>
                    </div>
                </div>
            </div>
        </>
    )
}