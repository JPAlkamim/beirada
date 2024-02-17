import React, { useEffect } from 'react'
import logo from '../assets/LogoIcon.svg'
import { Button, Dropdown, Input, MenuProps, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useSessionStorage } from 'usehooks-ts';

type HeaderProps = {
    currentPage?: string
}


export const Header = ({currentPage}: HeaderProps) => {
    const dict: { [key: string]: string } = {
      "MATERIAS": "/subjects",
      "GALERIA": "/gallery",
      "AREA DO TORCEDOR": "/fanarea",
      "SOBRE": "/about",
      "CONTATO": "/contact"
    }
    const [search, setSearch] = React.useState(false)
    const [isLogged, setIsLogged] = useSessionStorage('user', false);
    const [galeryType, setGaleryType] = useSessionStorage('galeryType', '');
    const [photoDetail, setPhotoDetail] = useSessionStorage('photoDetail', false);
    const [fanAreaType, setFanAreaType] = useSessionStorage('fanAreaType', '');
    const [points, setPoints] = useSessionStorage('points', 0);

    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const handleHeaderClick = (goTo: string) => {
      if (goTo) {
        setGaleryType('');
        setFanAreaType('');
        navigate(dict[goTo]);
      }
    };
    
    const loggout = () => {
      setIsLogged(false);
      messageApi.open({
        type: 'success',
        content: 'Você saiu da sua conta!',
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    const GalleryPhoto = () => {
      setGaleryType('PHOTO');
      setPhotoDetail(false);
      navigate('/gallery');
    }

    const itemsNotLogged = [
      {
        key: '1',
        label: (
          <Link className='flex justify-center' to="/login">
            Login
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link className='flex justify-center'  to="/signin">
            Cadastre-se
          </Link>
        ),
      }
    ];

    const itemsLogged = [
      {
        key: '1',
        label: (
          <Link className='flex justify-center' to="/profile">
            Perfil
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <p className='flex justify-center' onClick={loggout}>
            Sair
          </p>
        ),
      }
    ];

    const itensGallery = [
      {
        key: '1',
        label: (
          <div onClick={GalleryPhoto}>
            <Link className='flex justify-center' to="/gallery">
              Galeria de Fotos
            </Link>
          </div>
        ),
      },
      {
        key: '2',
        label: (
          <div onClick={() => setGaleryType('VIDEOS')}>
            <Link className='flex justify-center' to="/gallery">
              Galeria de Vídeos
            </Link>
          </div>
        ),
      },
      {
        key: '3',
        label: (
          <div onClick={() => setGaleryType('AUDIO')}>
            <Link className='flex justify-center' to="/gallery">
              Galeria de Áudios
            </Link>
          </div>
        ),
      }
    ]

    const itensFanArea = [
      {
        key: '1',
        label: (
          <div onClick={() => setFanAreaType('QUIZ')}>
            <Link className='flex justify-center' to="/fanarea">
              Quizes
            </Link>
          </div>
        ),
      },
      {
        key: '2',
        label: (
          <div onClick={() => setFanAreaType('SURVEY')}>
            <Link className='flex justify-center' to="/fanarea">
              Enquetes
            </Link>
          </div>
        ),
      },
      {
        key: '3',
        label: (
          <div onClick={() => setFanAreaType('GUESS')}>
            <Link className='flex justify-center' to="/fanarea">
              Palpites
            </Link>
          </div>
        ),
      },
      {
        key: '4',
        label: (
          <div onClick={() => setFanAreaType('REWARD')}>
            <Link className='flex justify-center' to="/fanarea">
              Recompensas
            </Link>
          </div>
        ),
      }
    ]

    return (
        <nav className='w-full fixed top-0 z-10'>
            {contextHolder}
            <div className='flex justify-between items-center p-4 h-28 w-screen' style={{backgroundColor: "#AA591C"}}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="logoImage" style={{width: '200px'}} />
                    </Link>
                </div>
                <p className='ml-4 font-semibold text-2xl mr-auto'  style={{color: '#FCF9F7', fontFamily: 'Barlow'}}>Na risca do futebol amador</p>
                <div className="flex gap-8 mr-20">
                  <div className="flex gap-1">
                    { isLogged && (
                      <p className='' style={{color: '#FCF9F7'}}> {points} </p>
                    )
                    }
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                        style={{color: '#FCF9F7'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </button>
                  </div>
                    <Dropdown menu={isLogged ? {items: itemsLogged} : {items: itemsNotLogged}} placement='bottom'>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth="1.5" 
                          stroke="currentColor" 
                          className="w-6 h-6"
                          style={{color: '#FCF9F7'}}
                          >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </button>
                    </Dropdown>
                </div>
            </div>
            
            <div className="grid grid-cols-6 px-24 py-1" style={{backgroundColor: '#FCF9F7'}}>
              <button onClick={() => setSearch(() => !search)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5} stroke="currentColor" 
              className="h-6"
              style={{color: '#254E22'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              </button>
              {
                !search && (
                    <>
                      <button key="Link1" className="text-white font-semibold p-2 rounded" onClick={() => handleHeaderClick('MATERIAS')}
                        style={{ color: currentPage == 'MATERIAS' ? '#FCF9F7' : '#254E22', backgroundColor: currentPage == 'MATERIAS' ? '#254E22' : undefined }}>
                        MATÉRIAS
                      </button>
                      <Dropdown menu={{items: itensGallery}} placement='bottom'>
                        <button key="Link2" className="text-white font-semibold p-2 rounded" onClick={() => handleHeaderClick('GALERIA')}
                          style={{ color: currentPage == 'GALERIA' ? '#FCF9F7' : '#254E22', backgroundColor: currentPage == 'GALERIA' ? '#254E22' : undefined }}>
                          GALERIA
                        </button>
                      </Dropdown>
                      <Dropdown menu={{items: itensFanArea}} placement='bottom'>
                        <button key="Link3" className="text-white font-semibold p-2 rounded" onClick={() => handleHeaderClick('AREA DO TORCEDOR')}
                          style={{ color: currentPage == 'AREA DO TORCEDOR' ? '#FCF9F7' : '#254E22', backgroundColor: currentPage == 'AREA DO TORCEDOR' ? '#254E22' : undefined }}>
                          ÁREA DO TORCEDOR
                        </button>
                      </Dropdown>
                      <button key="Link4" className="text-white font-semibold p-2 rounded" onClick={() => handleHeaderClick('SOBRE')}
                       style={{ color: currentPage == 'SOBRE' ? '#FCF9F7' : '#254E22', backgroundColor: currentPage == 'SOBRE' ? '#254E22' : undefined }}>
                        SOBRE
                      </button>
                      <button key="Link5" className="text-white font-semibold p-2 rounded" onClick={() => handleHeaderClick('CONTATO')}
                        style={{ color: currentPage == 'CONTATO' ? '#FCF9F7' : '#254E22', backgroundColor: currentPage == 'CONTATO' ? '#254E22' : undefined }}>
                        CONTATO
                      </button>
                    </>
                )
              }
            </div>
            <div className="flex justify-between items-center h-0.5" style={{backgroundColor: "#254E22"}}></div>
        </nav>
    )
}
