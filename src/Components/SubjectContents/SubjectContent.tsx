import React from 'react';
import { Header } from '../Header'
import { Footer } from '../Footer';
import Capa from '../../assets/Materia1/foto 1 e capa.jpg';
import Foto2 from '../../assets/Materia1/foto 2.jpg';
import Foto3 from '../../assets/Materia1/foto 3.jpg';
import Foto4 from '../../assets/Materia1/foto 4.jpg';

export const SubjectContent = () => {
    return (
        <>
            <Header currentPage='MATERIAS'/>
            <div className='pt-48 mx-24 xl:mx-64 grid'>
                <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                “O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela
                </p>
                <p className='text-xl' style={{color: '#737373', fontFamily: 'barlowRegular'}}>
                O influenciador explicou a motivação para a criação do canal e a dedicação em dar voz ao futebol amador maringaense
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>18/02/2024 | por Felippe Gabriel</p>
                <img src={Capa} alt="subject" className="mx-auto w-auto" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Frida (à esquerda) e Tio Luiz (à direita), são os idealizadores do Canal Meia na Canela | 
                </p>
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Foto: Reprodução/Redes Sociais/Canal Meia na Canela
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Luiz Guilherme, mais conhecido como Tio Luiz, ao lado de Felipe Frida, são os responsáveis pelo &nbsp;
                <span
                onClick={() => {window.location.href = 'https://www.youtube.com/@canalmeianacanela/featured'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Canal Meia na Canela'}
                </span>
                &nbsp; que já conta com 10,8 mil inscritos no YouTube. O canal se dedica a evidenciar o futebol de Maringá-PR e região, tanto no profissional quanto no amador.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Luiz Guilherme, mais conhecido como Tio Luiz, ao lado de Felipe Frida, são os responsáveis pelo Canal Meia na Canela, que já conta com 10,8 mil inscritos no YouTube. O canal se dedica a evidenciar o futebol de Maringá-PR e região, tanto no profissional quanto no amador. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Mas é na “várzea” que eles fazem sucesso. Estando presentes em diversos campeonatos amadores organizados na região, os influenciadores, que criam conteúdo desde 2021,  já alcançaram mais de 25 mil seguidores nas &nbsp;
                <span
                onClick={() => {window.location.href = 'https://www.instagram.com/canalmeianacanela/?hl=pt-br'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'redes sociais'}
                </span>
                . Com o lema “O futebol respira e nós somos o oxigênio”, Tio Luiz e Frida se dedicam a mostrar os bastidores do futebol e dar voz aos apaixonados pela bola.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                No domingo, 18 de fevereiro, foi a vez do canal estar presente na Copa Land View, no Bigbol Society, em Maringá. Foi o primeiro dia da competição organizada pela Amistosos Eventos, que reúne 96 equipes amadoras de fut7, divididas em seis divisões.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Durante toda a manhã, inúmeras partidas acontecem simultaneamente nos campos da arena, que recebe torcedores e mobiliza uma grande confraternização durante o tempo do evento.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Em meio à “resenha”, Tio Luiz falou um pouco sobre o seu trabalho e explicou sua paixão pelo futebol. A entrevista completa, em áudio, está disponível aqui
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Entrevista com Tio Luiz, do Canal Meia na Canela</p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Como surgiu a ideia de fazer o canal para falar de futebol aqui da região?</p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: O futebol em Maringá é muito grande, seja no profissional – com o &nbsp;
                <span
                onClick={() => {window.location.href = 'https://gmconline.com.br/esportes/futebol/futebol-maringaense/faz-o-pix-maringa-fc-faz-dois-nos-acrescimos-vence-o-america-e-avanca-na-copa-do-brasil/'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Maringá Futebol Clube'}
                </span>
                , com o &nbsp;
                <span
                onClick={() => {window.location.href = 'https://gmconline.com.br/esportes/futebol/futebol-maringaense/galo-maringa-leva-virada-do-operario-e-e-rebaixado-no-campeonato-paranaense/'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Galo [Maringá]'}
                </span>
                , com o &nbsp;
                <span
                onClick={() => {window.location.href = 'https://www.instagram.com/gremio_maringa/'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Grêmio Maringá'}
                </span>
                &nbsp; – e a várzea é muito maior. Tivemos a ideia através dos campeonatos de várzea que já aconteciam, se é que podemos chamar de várzea, porque são muito bem administrados pela &nbsp;
                 <span
                onClick={() => {window.location.href = 'https://www.amistosos.com.br/'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Amistosos Eventos'}
                </span>
                 . É um campeonato de muita qualidade, com muitos times envolvidos, é um dos maiores campeonatos de fut7 do Brasil. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                E nós, do Meia na Canela, criamos o canal para dar voz a essa galera. O cara que vem jogar num domingo de manhã merece ter uma entrevista no final do jogo, se ele fizer três gols ele pede música. Então, nesse intuito de dar voz a quem não tem, criamos [o canal] e hoje estamos com 23 mil seguidores, estamos fazendo um trabalho que é pioneiro na Cidade Canção. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Hoje cada time já tem o seu cara que faz a entrevista com a sua galera, então a gente veio trazer isso e hoje cada time já faz. Isso é muito legal, ‘o futebol respira e nós somos oxigênio’. Eu acho que esse é o recado do Meia na Canela, do Tio Luiz, do Maestro Frida também. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Hoje são vários locais, várias arenas. Maringá tem um polo muito grande de arenas de futebol society e recebe competições a nível nacional: &nbsp;
                <span
                onClick={() => {window.location.href = 'https://www.ff7pr.com.br/index.php'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Paranaense de fut7'}
                </span>
                , &nbsp;
                <span
                onClick={() => {window.location.href = 'https://cbf7.com.br/'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Liga Nacional de fut7'}
                </span>
                &nbsp; – onde no ano passado veio o Corinthians jogar aqui, veio o Flamengo. A partir de 2024, a CBF (Confederação Brasileira de Futebol) tem uma regulamentação que todos os times de [Campeonato Brasileiro] Série A precisam ter um time de fut7. E o fut7 vem da várzea, vem do jogador que gosta de jogar, sem receber para isso.
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Isso é o maior aprendizado que a gente tem, que é o amor antes de receber. Ninguém recebe para estar aqui, mas todo mundo vem, joga, dá o sangue pelo seu time. Isso é bonito demais de ver. 
                </p>

                <img src={Foto2} alt="subject" className="mx-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Equipes amadoras se enfrentam na Copa Land View de fut7 | Foto: Felippe Gabriel
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Qual é a sua relação com o futebol? De onde surgiu isso?</p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: Acho que como todo brasileiro, nós temos de berço um time do coração. O seu pai vai te passar o time dele, o seu avô vai – se não for o mesmo time – fazer você ser do time do seu avô, enfim. E o futebol no Brasil é o que movimenta, ‘né’? Ele é o nosso primeiro esporte enquanto meninos, e hoje a gente vê até enquanto meninas também. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Eu tentei jogar [profissionalmente], mas é aquela brincadeira de sempre, meu joelho estourou, não deu certo. Para mim, o futebol é o terceiro tempo, porque o jogo pelo jogo, todo mundo está assistindo. O terceiro tempo, que é a resenha, que é você confraternizar com seus amigos, que é você ter esse espírito de saber perder e saber ganhar, isso para mim é mais do que a bandeira. O futebol é geral, cada um veste a sua camisa, mas a partir do momento que apita o final, ninguém tem mais camisa. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                A partir disso criamos o canal e hoje a gente consegue estar no meio dessa rapaziada. A gente já fez muita coisa, [entrevistamos] &nbsp;
                <span
                onClick={() => {window.location.href = 'https://www.youtube.com/watch?v=j05I_xzh2Fo'}}
                style={{ color: '#254E22', fontFamily: 'barlowRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'Zico'}
                </span>
                , Bebeto, muita gente, e todos eles têm a paixão pelo futebol, que eu acho que é o intuito do seu trabalho também, mostrar o que todo mundo gosta. O [jogo de] futebol todo mundo está olhando, os bastidores é o que é mais interessante. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Vocês criaram o canal, mas vocês têm alguma outra profissão? </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: Sim. Eu sou dentista, o Felipe Frida é médico veterinário, e nós criamos o Canal Meia na Canela como um hobby no começo. Foi na pandemia, [tinha] muito podcast, e aí [pensamos] ‘vamos sair só do estúdio, deixar de fazer um pouquinho de podcast e vamos para o meio da galera, vamos entrevistar o pessoal na rua mesmo, no campeonato, no jogo’. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                E isso tomou uma proporção muito legal, porque você gostaria – e eu também – de sair de um jogo e fazer uma entrevista, mesmo que não seja para Globo, mas é para alguém que está querendo escutar o que você fez dentro do jogo. Então, isso foi o que ganhou o coração da galera e a gente segue fazendo e inventando novas coisas. 
                </p>

                <img src={Foto3} alt="subject" className="mx-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                A “resenha” pré e pós-jogo no futebol amador | Foto: Felippe Gabriel
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                E quanto do seu tempo é dedicado ao Meia na Canela hoje? </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: Hoje é integral. Eu sou dentista, sim, mas o Meia na Canela toma meu tempo, seja no presencial, seja em editar um vídeo, seja em fazer conteúdo, criar… Porque hoje nós criamos uma comunidade. O que eu sempre falei, e o Frida também, o nosso senso de comunidade faz com que você tenha o pertencimento daquilo. Então, se você pertence àquela comunidade, você abraça ela e ela só cresce. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Mesmo sendo um trabalho grande, que demanda tempo, por que essa dedicação com uma coisa que inicialmente vocês nem ganhariam com isso? 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: A gente sempre pensou o seguinte: ‘nunca fiz e nunca vou fazer por dinheiro’. A gente faz igual todo mundo que está aqui jogando, que também não ganha dinheiro para jogar. Nós fazemos por amor, realmente, e o dinheiro é consequência. 
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Mostramos e damos voz para uma várzea, para um futebol que acontece imensamente. Só aqui, onde estamos, são cinco divisões de campeonato, então tem muita gente envolvida por amor, sempre por amor. Amor ao esporte, amor ao futebol. E é aquilo, “meia na canela” você vê em tudo, não só no futebol, vai na academia, no tênis, no ciclismo, no pádel, basquete, vôlei… O Meia na Canela é um movimento e ele representa sempre. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Você consegue explicar essa paixão de algum modo? </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: Eu acho que essa paixão vem da frustração. A frustração de não ter conseguido ser um jogador, de uma lesão, como nós vemos aí vários exemplos de jogadores que se lesionam e não voltam a ser o que eram, mas não deixam de participar do futebol. Acho que é o senso de participação mesmo, com aquela pitadinha de frustração. Mas o canal vem para estar no meio, participar disso mesmo que não seja jogando. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Qual o papel do futebol para o brasileiro, para essa galera que está aqui? </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Tio Luiz: Eu acho que socialmente, culturalmente, aqui é muito forte, não tem o que falar. O Brasil respira futebol. Você pode perguntar para a sua tia que às vezes nem assiste, mas ela tem o time do coração. Isso é o mais legal de tudo. Você vai para outros países, para a Europa, e tem gente que não tem time do coração. E nós somos criados desde o berço a ter um time do coração. Então, o futebol é passado de geração em geração, é a única hierarquia que ainda funciona no Brasil. 
                </p>

                <img src={Foto4} alt="subject" className="mx-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center text-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                O médico veterinário Felipe Frida e o dentista Luiz Guilherme, que se dedicam ao futebol de Maringá-PR e região | Foto: Reprodução/Redes Sociais/Canal Meia na Canela
                </p>

                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                E para nós, do Meia na Canela, ele deixa de ter um pouco da bandeira para ter o conteúdo, sabe? Porque eu sou corintiano, o Frida é santista, mas eu já ‘botei’ a camisa do Palmeiras e fui gritar ‘palestra’ dentro da arena do Palmeiras. Porque antes de tudo, antes de torcer, o futebol existe. Eu acho que isso é o mais importante.</p>

                <div className="border-2" style={{borderColor: 'gray'}}></div>
                
                <p className='font-bold text-4xl py-4' style={{color: '#292822', fontFamily: 'Barlow'}}>Comente!</p>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24" style={{color: '#AA591C'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'Barlow'}}>Você</p>
                        <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Aqui é pra escrever alguma coisa?</p>
                    </div>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24" style={{color: '#AA591C'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'Barlow'}}>xxxxxxxxxxxxxx</p>
                        <p className='text-lg' style={{color: '#292822', fontFamily: 'Barlow'}}>Foi um jogaço.</p>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mt-10" style={{backgroundColor: "#254E22"}}></div>

                <div className='my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>

                <div className='flex my-2'>
                    {/* <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} /> */}
                    <div className="ml-5">
                        <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'Barlow'}}>TEMA</p>
                        <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>Título</p>
                        <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'Barlow'}}>17/12/2023</p>
                    </div>
                </div>
                <div className='flex my-10'>
                    {/* <img src={image1} alt="logo" className="logoImage" style={{height: '200px'}} /> */}
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