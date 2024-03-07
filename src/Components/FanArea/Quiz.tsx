import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button, Carousel, message } from 'antd';
import { useSessionStorage } from 'usehooks-ts';

export const Quiz = () => {

    interface clickedButtonProps {
        question: number;
        button: number;
    }

    interface buttonStylesProps {
        question: number;
        buttonNumber: number;
    }

    const [correctAnswers, setCorrectAnswers] = useSessionStorage('correctAnswers', 0)
    const [answeredQuestions, setAnsweredQuestions] = useSessionStorage('answeredQuestions', {
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false
    });

    const [messageApi, contextHolder] = message.useMessage();
    const [points, setPoints] = useSessionStorage('points', 0);



    const quizObject ={
        question1: {
            question: 'Qual edição da Copa Land View está acontecendo neste primeiro semestre de 2024?',
            options: ['14', '13', '12'],
            answer: 1
        },
        question2: {
            question: 'Quem foi o último campeão da 1ª Divisão da Copa Land View?',
            options: ['Inimigos do ET FC', 'Amigos da XV FC', 'S.E. Parisnacity'],
            answer: 1
        },
        question3: {
            question: 'A Copa Land View possui quantas divisões?',
            options: ['3', '6', '7'],
            answer: 1
        },
        question4: {
            question: 'Quantos times participam da Copa Land View, contando todas as divisões?',
            options: ['90', '95', '96'],
            answer: 1
        },
        question5: {
            question: 'Qual equipe é a maior campeã da 1ª Divisão da Copa Land View?',
            options: ['Tamo Junto FC', 'Inimigos do ET FC', 'Tio Nenê'],
            answer: 1
        }
    }

    const contentStyle: React.CSSProperties = {
        height: '450px',
        background: '#f5e6db',
      };


    const handleQuestions = (clickedButton: clickedButtonProps) => {
        const questionKey = `question${clickedButton.question}` as keyof typeof quizObject;
        const answerKey = `answer${clickedButton.question}` as keyof typeof quizObject;

        if (clickedButton.button === quizObject[questionKey].answer) {
            setCorrectAnswers(correctAnswers + 1);
            messageApi.open({
                type: 'success',
                content: 'Resposta correta! + 40 pontos!',
            });
            setPoints(points + 40);
        } else {
            messageApi.open({
                type: 'error',
                content: 'Resposta incorreta!',
            });
        }

        setAnsweredQuestions({
            ...answeredQuestions,
            [questionKey]: true
        });
    }

    const countHandleAnsweredQuestions = () => {
        let count = 0;
        if(answeredQuestions.question1){
            count++;
        }
        if(answeredQuestions.question2){
            count++;
        }
        if(answeredQuestions.question3){
            count++;
        }
        if(answeredQuestions.question4){
            count++;
        }
        if(answeredQuestions.question5){
            count++;
        }
        return count.toString().padStart(2, '0');
    }

    const getButtonStyle = (buttonStyle: buttonStylesProps) => {
        if ((answeredQuestions as { [key: string]: boolean })[`question${buttonStyle.question}` as keyof typeof answeredQuestions] && buttonStyle.buttonNumber === quizObject[`question${buttonStyle.question}` as keyof typeof quizObject].answer) {
            return {
                backgroundColor: '#254E22',
                color: '#FFF',
                fontFamily: 'barlowRegular'
            }
        }
        if ((answeredQuestions as { [key: string]: boolean })[`question${buttonStyle.question}` as keyof typeof answeredQuestions] && buttonStyle.buttonNumber !== quizObject[`question${buttonStyle.question}` as keyof typeof quizObject].answer) {
            return {
                backgroundColor: '#7D241E',
                color: '#FFF',
                fontFamily: 'barlowRegular'
            }
        }
        return {
            backgroundColor: '#AA591C',
            color: '#FFF',
            fontFamily: 'barlowRegular'
        }
    }

    return (
        <>
        {contextHolder}
        <Header currentPage='AREA DO TORCEDOR'/>
            <div className='mt-48 mb-24 mx-24 xl:mx-44'>
                <div className="grid">
                    <p className='font-bold text-6xl my-3 gray fill-cyan-700' style={{color: '#292822', fontFamily: 'barlowBold'}}>Quizz</p>
                    <div className="flex">
                        <p className='text-2xl font-bold ml-auto' style={{ color: '#292822', fontFamily: 'barlowRegular'}}>
                            <span>
                                {countHandleAnsweredQuestions()}
                            </span>
                             /05 respondidas - &nbsp; 
                             <span>
                                    {correctAnswers}
                             </span>
                             &nbsp; Acertos </p>
                    </div>
                </div>
            <Carousel className='p-2'>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1 text-center' style={{ color: '#292822', fontFamily: 'barlowBold'}}>{quizObject.question1.question}</p>
                            <div className='pt-10'>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 1, button: 1})}
                                    style={getButtonStyle({question: 1, buttonNumber: 1})}>{quizObject.question1.options[0]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 1, button: 2})}
                                    style={getButtonStyle({question: 1, buttonNumber: 2})}>{quizObject.question1.options[1]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 1, button: 3})}
                                    style={getButtonStyle({question: 1, buttonNumber: 3})}>{quizObject.question1.options[2]}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1 text-center' style={{ color: '#292822', fontFamily: 'barlowBold'}}>{quizObject.question2.question}</p>
                            <div className='pt-10'>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 2, button: 1})}
                                    style={getButtonStyle({question: 2, buttonNumber: 1})}>{quizObject.question2.options[0]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 2, button: 2})}
                                    style={getButtonStyle({question: 2, buttonNumber: 2})}>{quizObject.question2.options[1]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 2, button: 3})}
                                    style={getButtonStyle({question: 2, buttonNumber: 3})}>{quizObject.question2.options[2]}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1 text-center' style={{ color: '#292822', fontFamily: 'barlowBold'}}>{quizObject.question3.question}</p>
                            <div className='pt-10'>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 3, button: 1})}
                                    style={getButtonStyle({question: 3, buttonNumber: 1})}>{quizObject.question3.options[0]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 3, button: 2})}
                                    style={getButtonStyle({question: 3, buttonNumber: 2})}>{quizObject.question3.options[1]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 3, button: 3})}
                                    style={getButtonStyle({question: 3, buttonNumber: 3})}>{quizObject.question3.options[2]}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1 text-center' style={{ color: '#292822', fontFamily: 'barlowBold'}}>{quizObject.question4.question}</p>
                            <div className='pt-10'>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 4, button: 1})}
                                    style={getButtonStyle({question: 4, buttonNumber: 1})}>{quizObject.question4.options[0]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 4, button: 2})}
                                    style={getButtonStyle({question: 4, buttonNumber: 2})}>{quizObject.question4.options[1]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 4, button: 3})}
                                    style={getButtonStyle({question: 4, buttonNumber: 3})}>{quizObject.question4.options[2]}</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className='mx-12 p-12'>
                            <p className='text-3xl font-bold mt-1 text-center' style={{ color: '#292822', fontFamily: 'barlowBold'}}>{quizObject.question5.question}</p>
                            <div className='pt-10'>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 5, button: 1})}
                                    style={getButtonStyle({question: 5, buttonNumber: 1})}>{quizObject.question5.options[0]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 5, button: 2})}
                                    style={getButtonStyle({question: 5, buttonNumber: 2})}>{quizObject.question5.options[1]}</Button>
                                <Button className='mb-5 w-full font-bold justify-self-end'
                                    type="primary"
                                    onClick={() => handleQuestions({question: 5, button: 3})}
                                    style={getButtonStyle({question: 5, buttonNumber: 3})}>{quizObject.question5.options[2]}</Button>
                            </div>
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