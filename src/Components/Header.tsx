import React from 'react'
import logo from '../assets/LogoIcon.svg'
import { Dropdown, Input, MenuProps } from 'antd'
import { Link } from 'react-router-dom';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';



export const Header = () => {
    const links = ["MATÉRIAS", "GALERIA", "AREA DO TORCEDOR", "SOBRE", "CONTATO"]
    const [search, setSearch] = React.useState(false)


    const items = [
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

    return (
        <nav >
            <div className='flex justify-between items-center p-4 h-28' style={{backgroundColor: "#AA591C"}}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="logoImage" style={{width: '200px'}} />
                    </Link>
                </div>
                <p className='ml-4 font-semibold text-2xl mr-auto'  style={{color: '#FCF9F7', fontFamily: 'Barlow'}}>Na risca do futebol amador</p>
                <div className="flex gap-8 mr-20">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6"
                        style={{color: '#FCF9F7'}}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </button>
                    <Dropdown menu={{ items }} placement='bottom'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                style={{color: '#FCF9F7'}}
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>
                    </Dropdown>
                </div>
            </div>
            
            <div className="grid grid-cols-6 mx-24 py-3 h-12">
              <button onClick={() => setSearch(() => !search)}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="h-6"
                    style={{color: '#254E22'}}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              {
                !search && (
                    <>
                      <button key="Link1" className="text-white font-semibold" style={{ color: '#254E22'}}>MATÉRIAS</button>
                      <button key="Link2" className="text-white font-semibold" style={{ color: '#254E22'}}>GALERIA</button>
                      <button key="Link3" className="text-white font-semibold" style={{ color: '#254E22'}}>ÁREA DO TORCEDOR</button>
                      <button key="Link3" className="text-white font-semibold" style={{ color: '#254E22'}}>SOBRE</button>
                      <button key="Link3" className="text-white font-semibold" style={{ color: '#254E22'}}>CONTATO</button>
                    </>
                )
              }
              {/* {
                search && (
                  <div className="col-span-4 h-12">
                    <Input placeholder="Pesquisar" style={{width: '70%'}} />
                  </div>
                )
              } */}
            </div>
            <div className="flex justify-between items-center h-1" style={{backgroundColor: "#254E22"}}></div>
        </nav>
    )
}
