import React, { useEffect } from 'react'
import { Button, Carousel, Flex, Progress, ProgressProps, message } from "antd"
import { useSessionStorage } from 'usehooks-ts'

export const SurveyFanArea = () => {
    const [buttonClicked, setButtonClicked] = React.useState(false)
    const [buttonClicked2, setButtonClicked2] = React.useState(false)
    const [percentage1, setPercentage1] = React.useState(0)
    const [percentage2, setPercentage2] = React.useState(0)
    const [percentage3, setPercentage3] = React.useState(0)
    const [percentage4, setPercentage4] = React.useState(0)
    const [percentage5, setPercentage5] = React.useState(0)
    const [percentage6, setPercentage6] = React.useState(0)
    const [percentage7, setPercentage7] = React.useState(0)
    const [value, setValue] = useSessionStorage('user', false);
    const [surveys, setSurveyd] = useSessionStorage('surveyd', {
        survey1: false,
        survey2: false,
    });
    const [messageApi, contextHolder] = message.useMessage();


    const contentStyle: React.CSSProperties = {
        height: '450px',
        background: '#f5e6db',
      };

      const twoColors: ProgressProps['strokeColor'] = {
        '0%': '#254E22',
        '60%': '#8BA265',
        '100%': '#8BA265',
      };

    useEffect(() => {
        if (surveys.survey1 && surveys.survey2) {
            setPercentages()
        }
    })

    const handleButton1 = () => {
        if (!value) {
            messageApi.open({
                type: 'error',
                content: 'Faça login para votar!',
              });
            return
        }
        setButtonClicked(true)
        setTimeout(() => {
            setPercentage1(60)
            setPercentage2(75)
            setPercentage3(30)
            setPercentage4(10)
        }, 100)
        setSurveyd({...surveys, survey1: true})
    }

    const handleButton2 = () => {
        if (!value) {
            messageApi.open({
                type: 'error',
                content: 'Faça login para votar!',
              });
            return
        }
        setButtonClicked2(true)
        setTimeout(() => {
            setPercentage5(55)
            setPercentage6(87)
            setPercentage7(10)
        }, 100)
        setSurveyd({...surveys, survey2: true})
    }

    const setPercentages = () => {
        setButtonClicked(true)
        setButtonClicked2(true)
        setTimeout(() => {
            setPercentage1(60)
            setPercentage2(75)
            setPercentage3(30)
            setPercentage4(10)
            setPercentage5(55)
            setPercentage6(87)
            setPercentage7(10)
        }
        , 100)
    }


    return (
        <>
            {contextHolder}
            <div className='mt-52 mb-12 mx-24 xl:mx-44'>
                <p className='font-bold text-6xl my-3 gray fill-cyan-700' style={{color: '#292822', fontFamily: 'barlowBold'}}>Enquetes</p>
                <Carousel arrows={true} dots={{className: 'black'}} className=''>
                    <div>
                        <div style={contentStyle}>
                            <div className='mx-12 p-12'>
                                <div className="flex">
                                <p className='text-xl' style={{color: '#254E22', fontFamily: 'barlowBold'}}>Tema: &nbsp;</p>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Maringá</p>
                                </div>
                                <p className='text-2xl mb-10 font-bold' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Quem será o campeão da Copa Land View 1ª Divisão Semestre I 2024?</p>
                                <div className='flex mb-2'>
                                    {
                                        buttonClicked && (
                                            <Progress percent={percentage1} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton1}>Inimigos do ET FC</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={60} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>

                                <div className='flex mb-2'>
                                    {
                                        buttonClicked && (
                                            <Progress percent={percentage2} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton1}>Tamo Junto FC</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={75} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>

                                <div className='flex mb-2'>
                                    {
                                        buttonClicked && (
                                            <Progress percent={percentage3} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton1}>S.E. Parisnacity</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={30} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>

                                <div className='flex mb-2'>
                                    {
                                        buttonClicked && (
                                            <Progress percent={percentage4} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton1}>Outro</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={10} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>
                                    
                            </div>
                            <div className="flex justify-center">
                                <p className='text-xl' style={{color: '#254E22', fontFamily: 'barlowBold'}}>Possibilidade de ganhar até: &nbsp;</p>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>20 pontos</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='mx-12 p-12'>
                                <div className="flex">
                                <p className='text-xl' style={{color: '#254E22', fontFamily: 'barlowRegular'}}>Tema: &nbsp;</p>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Maringá</p>
                                </div>
                                <p className='text-2xl mb-10 font-bold' style={{color: '#292822', fontFamily: 'barlowRegular'}}>Quem será o campeão da Copa Land View 1ª Divisão Semestre I 2024?</p>
                                <div className='flex'>
                                    {
                                        buttonClicked2 && (
                                            <Progress percent={percentage5} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked2 && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton2}>Sim, com toda certeza</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={55} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>

                                <div className='flex'>
                                    {
                                        buttonClicked2 && (
                                            <Progress percent={percentage6} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked2 && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton2}>Tenho dúvidaso</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={87} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>

                                <div className='flex'>
                                    {
                                        buttonClicked2 && (
                                            <Progress percent={percentage7} strokeColor={twoColors} />
                                        )                                        
                                    }
                                    {
                                        !buttonClicked2 && (
                                            <>
                                            <Button className='w-full font-bold justify-self-end rounded-none'
                                            type="primary"
                                            style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}
                                            onClick={handleButton2}>Claro que não</Button>
                                            <Flex className="ml-2" gap="small" wrap='wrap'>
                                                <Progress type='circle' percent={10} size={35} strokeColor={twoColors}/>
                                            </Flex>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <p className='text-xl' style={{color: '#254E22', fontFamily: 'barlowBold'}}>Possibilidade de ganhar até: &nbsp;</p>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'barlowRegular'}}>10 pontos</p>
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
        </>
    )
}