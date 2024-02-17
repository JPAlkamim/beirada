import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Result, Modal, message } from 'antd';
import { useSessionStorage } from 'usehooks-ts';

export const Login = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();

    const [value, setValue] = useSessionStorage('user', false);
    const [points, setPoints] = useSessionStorage('points', 0);
    const [rewards, setRewards] = useSessionStorage('rewards', {
        1: false,
        2: false,
        3: false,
    });

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Bem-Vindo de volta Felippe!',
        });
        setTimeout(() => {
            setValue(true);
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
        if(username === 'a' && password === '1') {
            setPoints(790);
            setRewards({
                1: false,
                2: false,
                3: false,
            });
            success()
        } else {
            error()
        }
    }

    return (
        <>
            {contextHolder}
            <Header />
            <div className='py-64'>
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