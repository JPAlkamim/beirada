import React from 'react'
import { Button, Carousel } from "antd"

export const SurveyFanArea = () => {
    const contentStyle: React.CSSProperties = {
        height: '450px',
        color: '#fff',
        background: '#f5e6db',
      };


    return (
        <>
            <div className='mt-48 mb-24 mx-24 xl:mx-44'>
                <p className='font-bold text-6xl my-3 gray fill-cyan-700' style={{color: '#292822', fontFamily: 'Barlow'}}>Enquetes</p>
                <Carousel dots={{className: 'fill-cyan-400'}}>
                    <div>
                        <div style={contentStyle}>
                            <div className='mx-12 p-12'>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'Barlow'}}>TEMA</p>
                                <p className='text-2xl mb-10 font-bold' style={{color: '#292822', fontFamily: 'Barlow'}}>Pergunta</p>

                                <Button className='w-full font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>SIM</Button>
                                <Button className='w-full mt-2 font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>NÃO</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='mx-12 p-12'>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'Barlow'}}>TEMA</p>
                                <p className='text-2xl mb-10 font-bold' style={{color: '#292822', fontFamily: 'Barlow'}}>Pergunta</p>

                                <Button className='w-full font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>SIM</Button>
                                <Button className='w-full mt-2 font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>NÃO</Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <div className='mx-12 p-12'>
                                <p className='text-xl' style={{color: '#292822', fontFamily: 'Barlow'}}>TEMA</p>
                                <p className='text-2xl mb-10 font-bold' style={{color: '#292822', fontFamily: 'Barlow'}}>Pergunta</p>

                                <Button className='w-full font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>SIM</Button>
                                <Button className='w-full mt-2 font-bold justify-self-end rounded-none'
                                type="primary"
                                style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>NÃO</Button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}