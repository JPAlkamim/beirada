import React from 'react';
import { Header } from '../Header'
import { Footer } from '../Footer';
import Capa from '../../assets/Materia2/foto 1 e capa.jpg';
import Foto2 from '../../assets/Materia2/foto 2.jpg';
import Foto3 from '../../assets/Materia2/foto 3.jpg';
import Foto4 from '../../assets/Materia2/foto 4.jpg';

export const SubjectContentTwo = () => {
    return (
        <>
            <Header currentPage='MATERIAS'/>
            <div className='pt-48 mx-24 xl:mx-64 grid'>
                <p className='font-bold text-4xl' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Professor Preto: “A Amistosos é como se fosse um filho para mim”
                </p>
                <p className='text-xl' style={{color: '#737373', fontFamily: 'barlowRegular'}}>
                Idealizador da Amistosos Eventos, Professor Preto contou como se orgulha do projeto e de como o futebol é parte importante de sua vida
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>18/02/2024 | por Felippe Gabriel</p>
                <img src={Capa} alt="subject" className="mx-auto w-auto" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto criou a Amistosos Eventos em 2014 | Foto: Arquivo pessoal</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Eduardo Preto Grigório, mais conhecido como Professor Preto, tem uma vida dedicada ao futebol. Torcedor desde menino, estudante durante a graduação e professor desde o início da carreira, o criador da produtora de eventos esportivos Amistosos deu início a esta caminhada há dez anos.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Como uma espécie de plataforma do futebol amador de Maringá-PR e região, o site da Amistosos possibilita que equipes marquem partidas amigáveis entre si, a partir de um cadastro dos atletas e da agremiação. Depois do aceite ao desafio, o site libera os contatos das equipes para que haja a interação. Os placares das partidas também são divulgados após o confronto.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                O objetivo inicial de ser um intermediador, porém, logo se expandiu, e a Amistosos passou a organizar competições amadoras com a presença das equipes cadastradas no site. Atualmente, existem campeonatos de futsal infantil, futsal adulto e fut7 adulto, todos segmentados em diversas categorias e divisões, contando com centenas de equipes.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Dentre eles, a 13ª edição da Copa Land View de fut7 teve início no dia 18 de fevereiro e conta com 96 equipes distribuídas em seis divisões. Os duelos acontecem na Bigbol Society e na Arena Atlético Maringaense, em Maringá-PR.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                No primeiro dia do evento, Professor Preto esteve na Bigbol Society para prestigiar os atletas e atender ao público presente. Ficou perceptível como ele é querido por todos naquele ambiente. Quando contava sobre a história do seu projeto e sobre sua ligação com o futebol, pessoas se dirigiram a ele por duas vezes para comprimentá-lo e o elogiarem, ao perceberem que a conversa estava sendo documentada.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Confira estes e mais detalhes sobre a Amistosos Eventos na entrevista com o Professor Preto. O conteúdo completo, em áudio, está disponível aqui.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Entrevista com Professor Preto, criador da Amistosos Eventos</p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Professor Preto, como surgiu a ideia de montar a Liga Amistosos e os campeonatos? ?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: A Liga Amistosos em geral, a Amistosos Eventos, surgiu em agosto de 2014, através de um bate-papo num café, onde as equipes começaram a me procurar para eu intermediar a marcação de jogos para eles, jogo amistoso no caso. E aí um amigo meu estava comigo junto e falou ‘está aí o que a gente precisa fazer’.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Aí eu criei um site, amistosos.com.br, onde as equipes marcavam os jogos pelo site. O Facebook do futebol era o nosso site. E começou a dar muito certo. As equipes começaram a pedir campeonatos, torneios ali dentro, e nós começamos a organizar alguns pequenos torneios – aqui mesmo na Bigbol foram os primeiros. E as equipes começaram a gostar, começou a crescer.
                </p>
                <img src={Foto2} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                A Bigbol Society conta com cinco campos de gramado sintético | Foto: Felippe Gabriel</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Eu entendi que eu teria o dom e a capacidade de começar a organizar grandes competições. E aí, ano após ano, só cresceu tanto no fut7, como no futsal, como no futebol suíço, futebol de campo, infantil, categoria de base, adulto, enfim, no modo geral. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Esse é o início da Amistosos, através de um site para marcar jogo, e hoje se tornou uma potência dentro dos eventos esportivos. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                E por que eles procuraram você? Você já tinha algum envolvimento com o futebol? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Sim. Eu sou formado em Educação Física há 22 anos, sou professor de futebol, professor de futsal e muitos dos garotos que você vê aqui me cumprimentando foram meus atletas. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Hoje, na minha história, desde 2002, como técnico de futebol e de futsal, passaram mais de 3 mil atletas, desde as categorias de base. Então, o meu envolvimento no futebol de Maringá e região é muito grande, muito forte. Por isso que eles começaram a me procurar, pelo conhecimento que eu já tinha com eles desde criança, como meus atletas. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Qual é o nível de estrutura hoje da Liga?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Hoje nós temos mais de 80 colaboradores participando – entre arbitragem, equipe de trabalho, staffs – além de uns dez locais fixos de atuação de eventos. No fut7, a Bigbol e o Atlético Maringaense são os dois pontos fixos. No futsal, nós temos clubes como AABB, ACEMA e Colégio Marista.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Aí vem as prefeituras que nos apoiam – Marialva, Sarandi, Paiçandu, a própria Prefeitura de Maringá. Então nós temos vários pontos de estrutura fixa para receber os eventos e mais de 80 colaboradores trabalhando. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Esses colaboradores são contratados? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Todos são prestadores de serviço. Dentro do fut7, hoje, eu tenho meu braço direito que é o meu diretor, o Henrique, que faz toda essa válvula do fut7 andar e acontecer, hoje com 96 equipes na nossa competição. Então o Henrique é o maior responsável, ele é meu sócio aqui no fut7. 
                </p>
                <img src={Foto3} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                A Amistosos Eventos conta com equipes de arbitragem e staff para a organização das competições | Foto: Felippe Gabriel</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                No futsal, eu tenho algumas divisões entre os meus diretores, que são o Gilvan, o Bittencourt, o Nascimento, meu auxiliar gerente da competição. Nenhum deles são contratados fixos, mas são prestadores de serviço que têm um grande carisma e uma grande vontade de estar no meio. Então é assim que funciona hoje a Amistosos Eventos. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Eles recebem pelo trabalho? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Com certeza, todos são remunerados. Dentro da Amistosos, como eu sempre falei, não existe trabalho voluntário. Muitos se apresentam como voluntários, querem participar, querem estar no meio, porque é realmente um meio gostoso de competição, de envolvimento, de atividade física, de futebol, onde tem muita resenha, ‘né’? Mas todos como voluntários [têm o trabalho avaliado e] passam a ser remunerados pelas suas horas trabalhadas aqui no time.
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                A Amistosos Eventos arrecada recursos pelas inscrições dos times e pelos patrocínios?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: De tudo isso que você falou. Inscrição, patrocinadores, taxa de arbitragem, tudo isso funciona como uma válvula de arrecadação de receita para que se pague [as despesas]. Por domingo, para você ter uma ideia, no fut7, são 38 colaboradores, entre Bigbol e Atlético Maringaense. Então são 38 pessoas remuneradas no domingo trabalhando. Toda essa receita levantada por domingo é para pagar essas pessoas que trabalham. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Qual o alcance da Liga? Você falou de algumas cidades do Paraná, mas se restringe a isso ou já aumentou?   </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Hoje a Amistosos está praticamente em todo o Estado [do Paraná]. Se a gente pensar em equipes que vêm participar da nossa competição, hoje nós temos da região toda aqui – Itambé, Mandaguari, Marialva, Paranacity, Terra Rica, Loanda. São equipes mais distantes que vêm jogar nossa competição. E ao longo do Estado – se a gente pegar grandes cidades como Guarapuava, Foz [do Iguaçu], Cascavel e Umuarama – nós estamos lá com a nossa equipe de trabalho para coordenar diversos eventos que nós somos contratados. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Hoje a Amistosos Eventos não é só uma produtora de eventos, mas ela é uma coordenadora geral que faz a gestão de outros eventos terceirizados, tanto com a nossa organização como com a nossa equipe de arbitragem. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Você falou que a vida inteira você esteve envolvido com o futebol, mas o que é o futebol para você? Qual é a sua paixão? Você consegue explicar?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: O futebol hoje é prazer. Eu costumo falar para minha esposa, porque eu não jogo mais, eu fui atleta profissional de futsal e não tenho mais condições de jogar, e eu brinco com ela. O futebol é o meu prazer hoje. Claro, tem minha família que me dá muitas alegrias, mas o futebol é como se fosse uma grande válvula de escape, no modo geral, para a gente se divertir. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                São diversas emoções que acontecem no meio do futebol e ele traz muito prazer para mim. Eu sempre fui um cara muito competitivo, sempre gostei de participar, de jogar, de competir, e também depois como jogador, como técnico, como professor, como organizador, como gestor, eu estou envolvido com essas emoções. Então o futebol hoje é prazer. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                E o que é isso aqui para você, essa confraternização? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Isso aqui é algo surreal, onde você consegue reunir centenas de pessoas no mesmo lugar, por um mesmo objetivo, que é a interação, o entretenimento através do futebol. Isso para mim é muito prazeroso. Poder saber que eu sou um instrumento, que a Amistosos Eventos hoje é um instrumento de entretenimento para centenas e até milhares de pessoas hoje de Maringá e região.
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                A paixão pelo futebol surgiu desde quando? Você torce para algum time? Sempre assistiu?</p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Todo mundo me corneta bastante porque eu sou vascaíno, ‘né’? E aí, ‘pô’, o cara maringaense, nascido em Maringá, é vascaíno como? Mas aos 8 anos de idade, a minha paixão no futebol se consolidou ali, quando eu assisti uma grande final de Campeonato Brasileiro, Vasco e São Paulo [Final de 1989, no Estádio do Morumbi, em São Paulo]. O Vasco venceu por 2 a 0 [na realidade foi 1 a 0], campeão brasileiro. Foi o primeiro título do Vasco que eu assisti.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Eu estava em Minas Gerais, na casa do meu tio, que é jogador profissional de futebol, e foi com ele que eu fui para os campos. O meu pai nunca foi muito ligado ao futebol, mas sempre foi um incentivador. Mas o meu tio, o meu padrinho, sempre foi jogador profissional de futebol de campo, de futsal, e me levava para os campos. E aí, quando o Vasco foi campeão brasileiro, ele me deu uma camiseta oficial do Vasco e, desde então, a minha paixão pelo futebol se consolidou e o torcedor do Vasco cresceu. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                E nunca passou pela cabeça fazer outra coisa além de futebol?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Eu acho que todo mundo passa por esse momento, dentro da adolescência, na fase do colégio, da faculdade, de falar ‘o que eu vou fazer da minha vida?’. Mas o futebol sempre esteve em primeiro lugar. Pensei em algum momento, como eu gosto muito da natureza, de plantas em geral, de fazer Ciências Biológicas. Mas como de imediato eu passei no primeiro vestibular para Educação Física na UEM, acredito que era Deus me mostrando que o meu caminho seria realmente o futebol e o esporte. 
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                Hoje você trabalha exclusivamente com a Amistosos Eventos? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Não, ainda não consigo ser exclusivo da Amistosos Eventos, porque hoje eu sou coordenador de esporte do Colégio Paraná. Há 15 anos eu estou no Colégio Paraná, sempre fui técnico de futsal lá e eu não consegui me desvincular dessa instituição ainda que me abriu as portas lá atrás pro meu trabalho. Deu tudo muito certo, graças a Deus. Então eu sinto que a instituição ainda precisa de mim e eu preciso da instituição. 
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Mas praticamente 90% do meu envolvimento hoje é Amistosos Eventos e Amistosos Wear. Há seis meses nós abrimos uma fábrica de uniformes esportivos para atender essa demanda de equipes que participam dos nossos eventos.
                </p>

                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                E como que sua família encara essa sua profissão? </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Eles fazem parte. A minha esposa é o financeiro das empresas, então ela faz parte do convívio. O meu principal escritório é dentro da minha casa ainda. Então, meu filho está crescendo ali, me vendo trabalhar, eu consigo dar atenção para ele e para minha esposa.
                </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Eles aceitam muito bem isso, tanto que minha esposa me conheceu dentro da Amistosos já, porque a gente se conhece e estamos juntos desde 2018, a Amistosos já existia há quatro anos. Então ela fez parte desse crescimento da empresa, ela acompanha tudo isso e entende a importância que a Amistosos tem na minha vida hoje. 
                </p>
                <img src={Foto4} alt="subject" className="mx-auto w-auto max-w-screen-lg" />
                <p className='text-lg justify-self-center' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto é graduado em Educação Física e sempre trabalhou com futebol | Foto: Arquivo pessoal</p>
                
                <p className='text-lg my-4 font-bold' style={{color: '#292822', fontFamily: 'barlowBold'}}>
                A Amistosos, para você, gera que tipo de emoção?  </p>
                <p className='text-lg my-4' style={{color: '#292822', fontFamily: 'barlowRegular'}}>
                Professor Preto: Eu posso falar para você que a Amistosos é como se fosse um filho para mim, ‘né’? É minha família. Eu tenho o meu filho biológico, ser humano, mas eu tenho também o meu filho Amistosos, o grupo Amistosos. Para mim é uma satisfação poder ter criado essa empresa, que se tornou essa potência para Maringá, para o nosso Estado, e a gente almeja voos mais altos ainda.
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