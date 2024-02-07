import React from 'react'
import image1 from '../assets/fourByfour.png'
import image2 from '../assets/sixteenByeight.png'
import { Header } from './Header'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <>
            <Header />
            <div>
                <div className='mx-24 my-10'>
                    <div className='flex'>
                        <img src={image1} alt="logo" className="w-screen" style={{height: '400px'}} />
                        <div className='gap-2 flex-row'>
                            <img src={image2} alt="logo" className="w-screen" style={{height: '200px'}} />
                            <img src={image2} alt="logo" className="w-screen" style={{height: '200px'}} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mx-24" style={{backgroundColor: "#254E22"}}></div>

                <div className='mx-24 my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>

                <div className='flex mx-24 my-10'>
                    <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} />
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
                <div className='flex mx-24 my-10'>
                    <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} />
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}