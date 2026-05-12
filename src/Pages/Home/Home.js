import "./home.css"

import { Link } from "react-router-dom";


 function Home(){
    return(
        <div className="container">
            <main className="main">
                <div className="descricao-main">
                    <h1>Pipa Poço</h1>
                    <span>Mais que água. Tranquilidade para o seu dia a dia.</span>
                    <Link to="/pedido">Faça seu Pedido</Link>
                </div>
            </main>
            
            <section className="descricao-secao">
                <h2>Bem Vindo!</h2>
                <p>
                    Em lugares onde a água não chega com facilidade, a gente faz questão de chegar.
                    Somos especialistas na distribuição de água potável com caminhões-pipa,
                    levando mais do que abastecimento: levamos tranquilidade, dignidade e continuidade para o dia a dia.
                </p>
                <p>
                    Com uma operação ágil e compromisso com a qualidade, atendemos residências, comércios, propriedades
                    rurais e obras, sempre com responsabilidade e confiança.
                </p>
                <p>
                    Porque água não é luxo, é essencial. E garantir esse acesso é o que nos move.
                </p>
            </section>

            <section className="descricao-secao-2">
                <h2>Como Pedir?</h2>
                <p>
                       Para fazer seu pedido basta clicar no botão pedir na parte superior direita, se você não tiver feito seu login 
                    será redirecionado para uma página onde poderá faze-lo, onde será necessário informar um email funcional e criar 
                    uma senha. 
                </p>
                <p>
                    Se ainda não tiver uma conta você precisa, ainda na página de login, clicar no botão criar conta, onde será necessário
                    informar seu nome, sobrenome, email e criar uma senha, essa senha será a mesma que você usará futuramente para fazer seu
                    login, após clicar no botão criar conta, você estará automáticamente logado.
                </p>
                <p>
                    Após isso você poderá acessar livremente a página de pedido, ao preecher o formulário e clicar em "fazer pedido" 
                    seu pedido será enviado para nossa central e será analizado, após alguns minutos você receberá uma confirmação 
                    no seu email
                </p>
            </section>

            <section className="descricao-secao-2">
                <h2>
                    Nossos Serviços
                </h2>
                <ul className="ul-serviços">
                    <li>
                        <h3>Abastecimento residencial</h3>
                        <span>
                            Fornecimento de água potável para casas e comunidades com acesso limitado, garantindo praticidade
                            e segurança no dia a dia.
                        </span>
                    </li>
                    <li>
                        <h3>Abastecimento para obras</h3>
                        <span>
                            Atendimento a construções civis com entrega contínua de água para preparo de concreto, limpeza
                            e demais necessidades do canteiro.
                        </span>
                    </li>
                    <li>
                        <h3>
                           Fornecimento para empresas 
                        </h3>
                        <span>
                           Soluções sob medida para comércios e indústrias que precisam de abastecimento regular ou emergencial.
                        </span>
                    </li>
                    <li>
                        <h3>
                            Atendimento emergencial
                        </h3>
                        <span>
                            Entrega rápida em situações de falta d’água, seca ou interrupções no fornecimento público.
                        </span>
                    </li>
                    <li>
                        <h3>
                            Abastecimento rural
                        </h3>
                        <span>
                            Suporte a propriedades no campo, auxiliando na manutenção de atividades agrícolas e no consumo diário.
                        </span>
                    </li>
                    <li>
                        <h3>
                            Transporte de água não potável
                        </h3>
                        <span>
                            Distribuição para fins específicos, como irrigação, limpeza pesada e controle de poeira.
                        </span>
                    </li>
                </ul>
            </section>
            
            
            
        </div>
    )
 }

 export default Home;