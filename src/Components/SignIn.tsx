import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { Input, Button, message } from 'antd';

export const SignIn = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Não é possível cadastrar no momento!',
        });
    };


    return (
        <>
            {contextHolder}
            <Header />
            <div className='pb-48'>
                <div className='grid justify-items-center'>
                    <p className='font-bold text-4xl mt-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Cadastre-se</p>
                    <div className="flex my-4">
                        <p className='text-lg' style={{fontFamily: 'Barlow'}}>Já tem uma conta?</p>
                        <Link to="/login">
                            <p className='font-bold text-lg' style={{color: '#AA591C', fontFamily: 'Barlow'}}>&ensp;Faça o login</p>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-4 border-gray-950 mx-96 p-2">
                    <div className="">    
                        <p className='mr-auto my-2 font-bold text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Nome *</p>
                        <Input className='' placeholder='Insira o Nome' />
                    </div>
                    <div className="">    
                        <p className='mr-auto my-2 font-bold text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Sobrenome *</p>
                        <Input className='' placeholder='Insira o Sobrenome' />
                    </div>
                    <div className="col-span-2">    
                        <p className='mr-auto my-2 font-bold text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Email *</p>
                        <Input className='col-span-2' style={{}} placeholder='Insira o email' />
                    </div>
                    <div className="">    
                        <p className='mr-auto my-2 font-bold text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Senha *</p>
                        <Input.Password className='' placeholder='Insira a Senha' />
                    </div>
                    <div className="">    
                        <p className='mr-auto my-2 font-bold text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Confirmar senha *</p>
                        <Input.Password className='' placeholder='Confirme a Senha' />
                    </div>
                    <Button className='m-4 w-44 justify-self-center col-span-2 font-bold' 
                        type="primary"
                        onClick={error}
                        style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>CADASTRE-SE</Button>
                </div>    
            </div>
            <Footer />
        </>
    )
}