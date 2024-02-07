import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Result, Modal, message } from 'antd';

export const Login = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Bem-Vindo de volta Felippe!',
        });
        setTimeout(() => {
            navigate("/");
          }, 1500);
        
    };

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Credenciais erradas!',
        });
    };

    const handleClick = () => {
        if(username === 'ra118253@uem.br' && password === 'felippeCMM1') {
            success()
        } else {
            error()
        }
    }

    return (
        <>
            {contextHolder}
            <Header />
            <div className='pb-48'>
            <div className='grid justify-items-center'>
                <p className='font-bold text-4xl mt-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Login</p>
                <div className="flex my-4">
                    <p className='text-lg' style={{fontFamily: 'Barlow'}}>Não tem uma conta?</p>
                    <Link to="/signin">
                        <p className='font-bold text-lg' style={{color: '#AA591C', fontFamily: 'Barlow'}}>&ensp;Cadastre-se</p>
                    </Link>
                </div>
            </div>
            <div className="grid m-auto justify-items-center max-w-4xl border-4 border-gray-950 p-2">
                <p className='mr-auto my-2 font-bold text-2xl' style={{color: '#292822', fontFamily: 'Barlow'}}>Email *</p>
                <Input className='' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Insira o email' />
                <p className='mr-auto my-2 font-bold text-2xl' style={{color: '#292822', fontFamily: 'Barlow'}}>Senha *</p>
                <Input.Password className='mr-auto' value={password} onChange={(e) => setPassword(e.target.value)}placeholder='Insira a senha' />
                <Button className='m-4 w-44' 
                    type="primary" 
                    onClick={handleClick}
                    style={{fontFamily: 'Barlow', backgroundColor: '#AA591C' }}>Entrar</Button>
                <Link to="/esqueceuasenha">Esqueceu a senha?</Link>
            </div>    
            </div>
            <Footer />
        </>
    )
}