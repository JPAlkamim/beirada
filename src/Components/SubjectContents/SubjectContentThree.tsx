import React, { useEffect } from 'react';
import { Header } from '../Header'
import { Footer } from '../Footer';
import Foto1 from '../../assets/Materia3/foto 1.jpg';
import Foto2 from '../../assets/Materia3/foto 2.png';
import Foto3 from '../../assets/Materia3/foto 3.jpg';
import Foto4 from '../../assets/Materia3/foto 4.jpg';
import Capa from '../../assets/Materia3/foto 5 e capa.jpg';
import Materia1 from '../../assets/Materia1/foto 1 e capa.jpg';
import Materia2 from '../../assets/Materia2/foto 1 e capa.jpg';
import { useSessionStorage } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';

export const SubjectContentThree = () => {
    const [galeryType, setGaleryType] = useSessionStorage('galeryType', 'AUDIO');

    useEffect(() => {
       setGaleryType('AUDIO');
    })
    return (
        <>
            <Header currentPage='MATERIAS'/>
            <div className='pt-48 mx-24 xl:mx-64 grid'>
                <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Entrevista com Everson Natalino, organizador da Copa Ricardo Gordo
                </p>
                <p className='text-xl' style={{color: '#737373', fontFamily: 'loraRegular'}}>
                A competição reúne diversas equipes amadoras das cidades de Sarandi e Marialva e movimenta a comunidade em torno do futebol 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>11/02/2024 | por Felippe Gabriel</p>
                <img src={Foto1} alt="subject" className="mx-auto w-auto" />
                <p className='text-base justify-self-center' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Everson é o responsável pela Copa Ricardo Gordo e comanda o Califórnia FC | Foto: Reprodução/Redes Sociais</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Um bom exemplo é a Copa Ricardo Gordo de Futebol Suíço, que acontece em Sarandi-PR e conta com 16 times amadores do município. O campeonato, organizado pelo assessor político e comunicador Everson Natalino, conta com sorteio de grupos, chaveamento de confrontos, calendário definido e base de estatísticas, assim como um campeonato profissional. Todas as informações ficam reunidas no &nbsp;
                <a href="https://campeonato.ifut.com.br/campeonato/copa-ricardo-gordo-de-futebol-suico/" target="_blank" rel="noopener noreferrer">
                    <span
                        style={{ color: '#254E22', fontFamily: 'loraRegular', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {'site da competição'}
                    </span>
                </a>
                &nbsp; de maneira acessível e organizada.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                A Copa Ricardo Gordo teve início no dia 14 de janeiro e alguns de seus jogos acontecem na Arena Barba Rala, em Sarandi. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Foi lá que o time de Everson, o &nbsp;
                <a href="https://www.instagram.com/california_fc_sdi/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                    <span
                        style={{ color: '#254E22', fontFamily: 'loraRegular', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {'Califórnia FC'}
                    </span>
                </a>
                , enfrentou o &nbsp;
                <a href="https://www.instagram.com/ec_monterei/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                    <span
                        style={{ color: '#254E22', fontFamily: 'loraRegular', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {'Monte Rei'}
                    </span>
                </a>
                , e o comandante do time pôde contar o papel que o futebol desempenha em sua vida e a importância da prática do futebol amador para a comunidade da região. A entrevista completa, em áudio, está disponível &nbsp;
                <Link to={'/gallery'}>
                <span
                style={{ color: '#254E22', fontFamily: 'loraRegular', cursor: 'pointer', textDecoration: 'underline' }}
                >
                {'aqui.'}
                </span>
                </Link>
                </p>
                <img src={Foto2} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-base justify-self-center' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                O Califórnia FC foi derrotado pelo Monte Rei, por 3 a 0 | Créditos: Reprodução</p>


                <p className='text-3xl my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Entrevista com Everson Natalino, organizador da Copa Ricardo Gordo</p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Qual o seu envolvimento com a Copa Ricardo Gordo? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> O Ricardo Gordo deu o patrocínio da premiação, mas quem organiza sou eu. Só que eu entro com a minha equipe, que é essa equipe que jogou aqui, que é o Califórnia, eu sou o dono dessa equipe faz 15 anos. Desde os meus 18 anos que eu ‘tô’ com essa equipe. Então eu organizo o campeonato e ‘tô’ com essa equipe. 
                </p>
               
               
                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Qual é o desafio de organizar o campeonato? O que você tem que fazer?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> É complicado. No campeonato em si, a gente precisa do empenho de todos, principalmente em relação ao respeito. As equipes que entram, ter o respeito ao futebol é primordial. Para uma organização é muita responsabilidade, por exemplo, se der uma briga, alguma coisa assim. É o terceiro campeonato que eu estou organizando e não deu uma briga até agora, não deu nada e não vai dar porque a rapaziada sempre é muito respeitosa. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Tem muita dificuldade por questão dos campos. A gente tem poucos campos aqui, então a gente tem que locar com antecedência, para poder reservar. Às vezes não tem um campo disponível que a gente gostaria, então tem alguma dificuldade que a gente enfrenta, até por uma falta de incentivo dentro do nosso município, então a gente tem uma certa dificuldade, mas graças a Deus está tirando de letra. 
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Como funciona essa organização? Como se formam os times e os confrontos? Como eles formam as rivalidades? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Sobre o campeonato, são montados os times e é feito o sorteio dos grupos. São quatro grupos aqui, cada grupo joga contra si, os dois primeiros classificam e os dois últimos ficam fora da fase mata-mata. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                A maioria dos times já tem a sua base. Como eu falei, na minha equipe Califórnia, eu estou a frente dela faz 15 anos. Só que para o campeonato eu não posso entrar só com a minha equipe, eu sempre pego uns quatro, cinco convidados, assim como outras equipes e montam times mais competitivos com esses convidados.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                E a rivalidade se cria em uma resenha. Você ganha um jogo, dá aquela brincada e no outro jogo eles ganham de você e dão aquela brincada. Aí começa a criar as rivalidades de fato, principalmente quando essa vitória vem no mata-mata, que você elimina o adversário, então eles já vêm com outro gás contra você num próximo jogo. Então a rivalidade vai se criando, mas sempre uma rivalidade muito sadia aqui, diferente do que a gente vê, às vezes, de briga e pancadaria. Não, uma rivalidade que quer ganhar o jogo, mas sem ser desleal com o adversário. 
                </p>
                <img src={Foto3} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-base justify-self-center' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Para Everson, o Monte Rei é sempre um bom adversário | Foto: Felippe Gabriel</p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                O Califórnia tem um rival máximo?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Rival a gente não pode falar que a gente tem, mas tem alguns jogos que a gente gosta de jogar bem e não gosta de perder. Hoje o Monte Rei, para a gente, é bem complicado nos campeonatos mata-mata, a gente não tem muita felicidade contra eles, é uma equipe muito forte, que eu respeito muito. A gente não tem muita felicidade contra eles. Ganhamos deles no sábado passado em outro campeonato. Aí eles vieram com mais gosto ainda e venceram a gente pelo mesmo placar que a gente ganhou o outro. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Mas uma equipe como o &nbsp;
                <a href="https://www.instagram.com/negostylofc/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                    <span
                        style={{ color: '#254E22', fontFamily: 'loraRegular', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {'Nego Stylo'}
                    </span>
                </a>
                &nbsp; que está aqui jogando nesse momento, toda vez que a gente joga [contra] dá um embate muito forte, porque ninguém quer perder para o outro. Então assim, a gente tem alguns clubes que a gente sabe que aquele jogo vai ser jogão, vai ser um jogo pegado e que ninguém quer perder.
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Você tem outras profissões. Como você decidiu querer “trabalhar” com futebol? Não é uma coisa primordial da sua vida, certo? Ou é?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Não. Futebol, para mim, eu uso mais como uma forma de descontração. Eu trabalho na assessoria do Deputado Jacovós, então durante o dia eu presto atendimento à assessoria, e eu também estou lá no Canal 10, eu entrei lá semana passada para poder fazer algumas reportagens. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                O campeonato, geralmente toda organização que eu faço aqui – as artes sou eu que faço, toda a tabela sou eu que faço – geralmente eu faço a noite, meia-noite, 1h da manhã. Mas eu faço com gosto e não por fim lucrativo, porque aqui não tem reversão em dinheiro nenhum. Todo valor que as equipes pagam de taxa é revertido para o campo, para pagar o campo e para pagar a arbitragem. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Isso que eu faço é porque eu gosto mesmo do futebol em si, eu gosto de propagar isso. Inclusive sábado (10), foi o segundo dia de uma escolinha que eu criei. Uma escolinha [para alunos] de 6 a 15 anos. Já temos 60 alunos nessa escolinha, [que serve] para incentivar mais o futebol. Eu sou um cara que busca brigar pelo esporte, porque a gente sabe que o esporte tira a molecada da criminalidade, também pelo bom convívio com os demais. Então é mais voltado a isso, para propagar o bom futebol.
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Como você explica essa paixão pelo futebol? Por que isso te move?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Desde pequeno eu sou santista e meu pai sempre me incentivou a ser santista. Naquela época a gente tinha uma dificuldade muito grande, então o que tinha para brincar era uma bola, ia no campinho e brincava de bola, às vezes na rua de casa, então por isso que foi a paixão maior. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                E agora eu tenho meu filho. Ele tem 8 anos de idade e treina praticamente todos os dias. Inclusive até a própria escolinha um pouco ainda eu posso dizer que foi voltado a treinar ele. E aí, consequência disso, vêm outras crianças. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Então, assim, o futebol para mim move muita coisa, é um sentimento muito bom. É domingo, eu ‘tô’ aqui no campo, é sábado, ‘tô’ no campo. Na quarta-feira tem um jogo, também estamos no campo. Em casa assistindo futebol. No meio de semana todo, meu filho ‘tá’ treinando. Então, assim, o futebol transpira para a gente. É algo que eu tenho como prazer absoluto. 
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                É divertimento, mas é sério, não é? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> É divertimento, mas é sério. Na hora dos jogos, às vezes fica até irreconhecível. Porque briga, xinga, cobra. Mas aí acabou o jogo todo mundo se cumprimenta, dá aquelas risadas. Na hora do jogo, o estresse é absoluto. Você fica ali focado, muito tenso, principalmente quando está perdendo. Aí a tensão é muito forte. 
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Você tem uma noção de como esses campeonatos movimentam a comunidade?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Vamos pegar pequenos exemplos. Aqui dentro desse campo, os times vem jogar e, consequentemente, acaba tendo uma venda a mais de bebidas, de salgadinhos. Tem um barzinho na esquina que quando o time acaba o jogo vai lá e se reúne para tomar uma ‘cervejinha’, para tomar um refrigerante, comer uma ‘porçãozinha’. Aí já arma um churrasco, compra uma carne no açougue, que também gira o comércio. Só isso daí já acaba movimentando a nossa economia e favorecendo principalmente os pequenos, ‘né’? Porque você vai no mercadinho, a mercearia da esquina, você vai em um açougue pequeno, então favorece os pequenos. 
                </p>
                <img src={Foto4} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-base justify-self-center' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                A Arena Barba Rala recebeu vários torcedores na manhã de domingo, 18, na Copa Ricardo Gordo | Foto: Felippe Gabriel</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                E o bairro como um todo também tem a movimentação dos jogadores. Ele acaba deixando de fazer alguma coisa que ele tinha que fazer para jogar um futebol, por exemplo. Então isso aí mexe até com a estrutura da família, no termo do que você projetou para aquele domingo. Eu tô aqui, como organizador, e minha esposa está sentada lá fazendo mesa (representação da competição), e hoje é aniversário dela. Então a gente vai sair para comer alguma coisa, mas só quando acabar o campeonato aqui.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Aí tem o pessoal que vem acompanhar, porque todo jogo tem muita torcida. Então o povo já fala nos grupos ‘vamos lá assistir esse jogo, vai ser bom, vamos assistir esse’. Então movimenta demais em vários fatores. 
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Em relação aos jogadores, como entra no time? Existem ‘peneiras’? Como funciona? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> Não. Como eu disse, eles [os times] têm a sua base já. Igual o meu time, eu já tenho uma base de 15 anos. Desses [jogadores] aí tem alguns que estão há 15 anos, mas alguns vão entrando conforme o tempo. Alguns têm 8 anos que estão no time, e por aí vai. Às vezes acontece de ter convidados. O convidado você chama ou ele pede uma vaga, ou você está precisando de alguém e ele vai jogar para a equipe. Ele acaba se propondo a jogar. Ele se auto convida, a gente aceita, entra no time e joga. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Tem time que é conhecido por pagar um jogador ou outro. Isso acontece, chama um jogador de amador, um jogador que já foi profissional, e acaba pagando o jogador. E aí é uma adversidade, mas a maioria não faz isso não. A maioria chama alguns convidados e vai para um nível competitivo. Porque o cara quando ele começa a pagar um jogador para jogar aqui a várzea, vamos falar assim, consequentemente ele acaba não tendo muito um respeito da galera. ‘Você não consegue montar um time se não for pagando?’, então acaba não tendo muito um respeito, mas é válido. Tudo isso daí é válido. 
                </p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Você pode falar um pouco do Califórnia, como você fundou o time há 15 anos? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> O Califórnia tem um pouco mais de 15 anos, a equipe em si, ‘né’?. Porém, o antigo dono iria acabar com a equipe. Ele falou ‘olha, eu não consigo mais, estou trabalhando’ e eu tinha 18 anos e jogava para ele. Então eu falei ‘vamos fazer o seguinte? Deixa eu ver se eu consigo tocar, me dá o uniforme, eu vou ver se eu consigo tocar. Se não der certo, eu acabo com o time também e vou jogar para outro time’. E aí com um mês, se estende a 15 anos aí que estou à frente. Então aqui é uma segunda pele, a camisa do Califórnia para a gente é uma segunda pele. 
                </p>
                <img src={Capa} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-base justify-self-center' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                Equipe do Califórnia FC | Foto: Reprodução/Redes Sociais</p>


                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'loraBold'}}>
                Então foi formada uma ideia em um grupo de amigos e começou a montar o time? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'loraRegular'}}>
                <b>Everson:</b> É, e seguimos assim, porque alguns ficaram, outros saíram. Eu comecei a chamar uns amigos, passamos alguns perrengues, até inclusive com um time bem abaixo da média, vamos falar assim, em alguns momentos. [Depois] a gente teve um time mais competitivo e por aí foi, foi lapidando o time e hoje é num time que ‘tá’ numa crescente muito boa.
                </p>

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
                        <p className='text-2xl font-bold' style={{color: '#AA591C', fontFamily: 'Barlow'}}>Nome</p>
                        <TextArea className='w-11/12'/>
                    </div>
                </div>

                <div className="flex justify-between items-center h-1 mt-10" style={{backgroundColor: "#254E22"}}></div>

                <div className='my-10'>
                    <h1 className='font-bold text-2xl' style={{ color: '#254E22'}}>Últimas postagens</h1>
                </div>
                
                <Link to={'/subjectcontentInterview'}>
                    <div className='flex my-10'>
                        <img src={Materia1} alt="logo" className="logoImage" style={{height: '250px', width: '350px'}} />
                        <div className="ml-5">
                            <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'barlowBold'}}>MATÉRIAS</p>
                            <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'loraBold'}}>“O futebol respira e nós somos o oxigênio”; entrevista com Tio Luiz, do Canal Meia na Canela</p>
                            <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'loraRegular'}}>18/02/2024</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/subjectcontentEverson'}>
                    <div className='flex my-10'>
                        <img src={Materia2} alt="logo" className="logoImage" style={{height: '250px', width: '350px'}} />
                        <div className="ml-5">
                            <p className='text-lg' style={{ color: '#AA591C', fontFamily: 'barlowBold'}}>MATÉRIAS</p>
                            <p className='text-4xl font-bold mt-4' style={{ color: '#292822', fontFamily: 'loraBold'}}>Professor Preto: “A Amistosos é como se fosse um filho para mim”</p>
                            <p className='text-xl mt-4' style={{ color: '#292822', fontFamily: 'loraRegular'}}>18/02/2024</p>
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    )
}