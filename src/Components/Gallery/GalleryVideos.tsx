import React from 'react';
import image1 from '../../assets/fourByfour.png'
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

export const GalleryVideos = () => {
    const [openModalVideo, setOpenModalVideo] = React.useState(false)

    return (
        <>
            <div className='mt-64 mb-24 mx-24 xl:mx-44'>
                <p  className='font-bold text-4xl my-4' style={{color: '#292822', fontFamily: 'Barlow'}}>
                            Galeria de Vídeos</p>
                <div className='grid grid-cols-3 gap-6 justify-items-center'>
                    <div className="cursor-pointer">
                        <img onClick={() => setOpenModalVideo(true)} src={"https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80"} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={image1} alt="image1" className="w-72 h-56 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30" />
                        <div className="grid justify-center">
                            <p className='text-lg font-bold text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                            <p className='text-lg text-center' style={{color: '#292822', fontFamily: 'Barlow'}}>Resumo</p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Cruel Summer"
                centered
                open={openModalVideo}
                onCancel={() => setOpenModalVideo(false)}
                footer={null}
                destroyOnClose={true}
                width={690}
            >
                <ReactPlayer url='https://www.youtube.com/watch?v=ic8j13piAhQ' />
            </Modal>
        </>
    )
}