import React from 'react';
import { Button, Input, message } from 'antd';
import time1 from '../../assets/palpites1.png';
import time2 from '../../assets/palpites2.png';
import ballSoccer from '../../assets/ballSoccer.svg';
import { useSessionStorage } from 'usehooks-ts';

export const GuessFanArea = () => {
    const [guesses, setGuesses] = useSessionStorage('guesses', {
        score1: '',
        score2: '',
        finalizations: '',
        fouls: '',
        yellowCards: ''
    });
    const [alreadyGuessed, setAlreadyGuessed] = useSessionStorage('alreadyGuessed', false);
    const [value, setValue] = useSessionStorage('user', false);

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Palpites registrados com sucesso!',
        });
    }

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Preencha todos os campos!',
        });
    };

    const handleClick = () => {
        if(value === false) {
            messageApi.open({
                type: 'error',
                content: 'Faça login para palpitar!',
              });
            return
        }
        if (guesses.score1 === '' || guesses.score2 === '' || guesses.finalizations === '' || guesses.fouls === '' || guesses.yellowCards === '') {
            error()
        } else if (!alreadyGuessed){
            success()
            setAlreadyGuessed(true)
        } else {
            messageApi.open({
                type: 'error',
                content: 'Você já registrou seus palpites!',
              });
            return 
        }
    }

    return (
        <>
            {contextHolder}
            <div className='mt-64 mb-24 mx-24 xl:mx-44'>
                <p className='font-bold text-4xl my-3' style={{color: '#292822', fontFamily: 'barlowBold'}}>Palpite</p>
                <div className="grid grid-cols-3 gap-6">
                    <div className='grid mt-2 p-2 h-80'>
                        <div className=''>
                            <p className='text-center text-2xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Copa Land View - 1ª Divisão - Semestre I 2024 - 3ª Rodada</p>
                            <p className='text-center text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>17/02/2024 | 10h | Atlético Maringaense - Campo 2</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={time1} alt="time1" className="w-36 h-36" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-40">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            <img src={time2} alt="time2" className="w-36 h-36" />
                        </div>
                    </div>
                    <div className='col-span-2 mt-2 '>
                    <ul className='text-start mx-8 mt-10'>
                        <li className='text-xl flex my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                            Qual vai ser o placar final da partida?
                            <div className="flex ml-3">
                                <Input className='w-10 h-8 text-center' onChange={(e) => setGuesses({...guesses, score1: e.target.value})} value={guesses.score1}>
                                </Input>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-8">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                                <Input className='w-10 h-8 text-center' onChange={(e) => setGuesses({...guesses, score2: e.target.value})} value={guesses.score2}>
                                </Input>
                            </div>
                            <div className='flex ml-auto'>
                                4 &nbsp;
                            <img src={ballSoccer} alt="ballSoccer" className="w-6 h-6" />
                            </div>
                            </li> 
                            <div className="border-2" style={{borderColor: 'gray'}}></div>
                        <li className='text-xl flex my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                            Quantas finalizações o Araucária FC terá ao fim do jogo?
                            <Input className='ml-2 w-10 h-8 text-center' onChange={(e) => setGuesses({...guesses, finalizations: e.target.value})} value={guesses.finalizations}>
                            </Input>
                            <div className='flex ml-auto'>
                                2 &nbsp;
                            <img src={ballSoccer} alt="ballSoccer" className="w-6 h-6" />
                            </div></li>
                            <div className="border-2" style={{borderColor: 'gray'}}></div>
                            <li className='text-xl flex my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                            Quantas faltas terão na partida?
                            <Input className='ml-2 w-10 h-8 text-center' onChange={(e) => setGuesses({...guesses, fouls: e.target.value})} value={guesses.fouls}>
                            </Input>
                            <div className='flex ml-auto'>
                                5 &nbsp;
                            <img src={ballSoccer} alt="ballSoccer" className="w-6 h-6" />
                            </div></li>
                            <div className="border-2" style={{borderColor: 'gray'}}></div>
                        <li className='text-xl flex my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                            Quantos cartões amarelos terão na partida?
                            <Input className='ml-2 w-10 h-8 text-center' onChange={(e) => setGuesses({...guesses, yellowCards: e.target.value})} value={guesses.yellowCards}>
                            </Input>
                            <div className='flex ml-auto'>
                                5 &nbsp;
                            <img src={ballSoccer} alt="ballSoccer" className="w-6 h-6" />
                            </div></li>
                            <div className="border-2" style={{borderColor: 'gray'}}></div>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                <Button className='m-2 w-56 h-14 font-bold justify-self-end'
                    type="primary"
                    onClick={handleClick}
                    style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>{alreadyGuessed ? 'JÁ REGISTRADO' : 'REGISTRAR PALPITES'}</Button>
                </div>
            </div>
        </>
    )
}