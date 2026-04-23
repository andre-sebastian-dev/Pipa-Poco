import "./home.css"

import { Link } from "react-router-dom";


 function Home(){
    return(
        <div className="container">
            <main className="main">
                <div className="descricao-main">
                    <h1>Pé de Pipa</h1>
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
                    para pedir lorem blabla bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto xo dlica i gunai
                    goia tuisol fuledimarto xo dlica i gunai tiforme jofundio to goia tuisol fuledimarto xo goia tuisol 
                    bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto.
                </p>
                <p>
                    jotombe flueque tiforme jofundio to goia tuisol fuledimarto xo dlica i gunai
                    goia tuisol fuledimarto xo dlica i gunai tiforme jofundio to goia tuisol fuledimarto xo goia tuisol 
                    bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto.
                </p>
            </section>

            <section className="descricao-secao-2">
                <h2>
                    Serviços
                </h2>
                <p>
                     Sobre os nossos serviços lorem blabla bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto xo dlica
                    i gunai goia tuisol fuledimarto xo dlica i gunai tiforme jofundio to goia tuisol fuledimarto xo goia tuisol 
                    bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto.
                </p>
                <p>
                    tiforme jofundio to goia tuisol fuledimarto xo goia tuisol 
                    bla jotombe flueque tiforme jofundio to goia tuisol fuledimarto flueque tiforme jofundio to goia tuisol fuledi
                    marto xo dlica i gunai, goia tuisol fuledimarto xo dlica i gunai tiforme.
                </p>
            </section>
            
            
            
        </div>
    )
 }

 export default Home;