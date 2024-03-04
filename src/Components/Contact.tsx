import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Input, Button, message } from 'antd';

export const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const sendContact = () => {
        messageApi.open({
            type: 'success',
            content: 'Mensagem enviada com sucesso!',
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }


    return (
        <>
            {contextHolder}
            <Header currentPage='CONTATO' />
            <div className="conten ml-10 mb-44 mt-64">
                <p className='font-bold text-6xl mb-2' style={{color: '#292822', fontFamily: 'barlowBold'}}>Contato</p>
                <div className="grid justify-items-start max-w-4xl border-4 rounded  border-gray-950 p-2">
                    <p>Nome completo *</p>
                    <Input placeholder="Digite seu nome" />
                    <p className="mt-2">Email *</p>
                    <Input placeholder="Digite seu email" />
                    <p className="mt-2">Telefone/Celular *</p>
                    <Input placeholder="Digite seu telefone ou celular" />
                    <p className="mt-2">Escreva sua mensagem aqui: </p>
                    <Input.TextArea placeholder="Digite sua mensagem" />
                    <Button className='m-auto mt-4 w-44 ' 
                        type="primary"
                        onClick={sendContact}
                        style={{fontFamily: 'barlowRegular', backgroundColor: '#AA591C' }}>Enviar</Button>

                </div>    
            </div>
            <Footer />
        </>
    )
}