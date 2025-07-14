import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Countdown from './Countdown';

function App() {
  return (
    <>
    
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
         
          <a className="navbar-brand" href="#home">HandMind</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#detalhes-projeto">Sobre o Projeto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#funcionalidades">Características</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>        
        <header id="home" className="container mt-5 pt-5 text-center">
          <div className="row justify-content-center">
            <div className="col-md-8">
              
              <h1 className="display-4">HandMind: Uma Proposta Tecnológica para o Ensino Interativo de LIBRAS</h1>
              <p className="lead">
                
                Um aplicativo móvel que utiliza visão computacional e gamificação para criar uma experiência de aprendizado da Língua Brasileira de Sinais (Libras) mais eficaz e engajadora.
              </p>
              <img src="/handmind.png" className="img-fluid my-4 rounded shadow w-50" alt="Ilustração do projeto HandMind" />
              <section id="detalhes-projeto" className="container my-5">
                <div className="row justify-content-center">
                  <div className="col-lg-10">

                    <h2 className="text-center mb-4">O Projeto HandMind em Detalhes</h2>
                  
                    <h3 className="mb-3">A Problemática</h3>
                    <p>
                      A comunicação é um pilar essencial para a integração social, mas no Brasil, cerca de 10,7 milhões de pessoas com algum grau de deficiência auditiva enfrentam barreiras significativas em seu dia a dia. Embora a Libras seja o meio legal de comunicação para essa comunidade, seu desconhecimento pela maioria da população ouvinte, somado à escassez de materiais didáticos que sejam interativos e acessíveis, cria grandes dificuldades no processo de ensino-aprendizagem.
                    </p>
                    <p>
                      A situação é ainda mais crítica ao considerarmos que mais de 90% das crianças surdas nascem em famílias de pais ouvintes, tornando a escola o principal ambiente para a aquisição da língua. No entanto, muitas instituições de ensino não estão preparadas, faltando metodologias e materiais adaptados à percepção visual-espacial dos alunos surdos. As tecnologias assistivas atuais, como HandTalk e VLibras, focam principalmente na tradução de texto ou voz para Libras, mas não oferecem um mecanismo de avaliação interativo que permita ao usuário praticar a execução dos sinais e receber um feedback em tempo real sobre seu desempenho. É essa lacuna que o projeto HandMind busca preencher.
                    </p>

                    <hr className="my-4" />
                    
                    <h3 className="mb-3">Os Objetivos</h3>
                    <p>
                      <strong>Objetivo Geral:</strong> Desenvolver o aplicativo móvel HandMind para a plataforma Android, que funcione como uma ferramenta complementar para o ensino e aprendizado de Libras, empregando técnicas de visão computacional e gamificação para gerar uma experiência interativa e avaliativa.
                    </p>
                    <p><strong>Objetivos Específicos:</strong></p>
                    <ul>
                      <li>Realizar uma revisão bibliográfica sobre as tecnologias assistivas existentes para Libras, com foco em visão computacional e gamificação.</li>
                      <li>Definir um conjunto inicial de sinais do alfabeto e vocabulário básico de Libras para serem implementados no aplicativo.</li>
                      <li>Desenvolver um módulo de visão computacional, usando o framework MediaPipe e uma rede neural, para detectar e reconhecer os gestos capturados pela câmera do dispositivo.</li>
                      <li>Implementar uma interface gamificada com elementos como níveis, sistema de pontuação e feedback visual imediato para engajar o usuário.</li>
                      <li>Criar um módulo de avaliação onde o usuário possa praticar os sinais que aprendeu e ter seu desempenho analisado pelo sistema.</li>
                      <li>Realizar testes de usabilidade e funcionamento com usuários para validar a eficácia da ferramenta como um recurso de aprendizagem.</li>
                    </ul>

                    <hr className="my-4" />
                   
                    <h3 className="mb-3">A Solução Proposta</h3>
                    <p>
                      A solução é o <strong>HandMind</strong>, um aplicativo Android projetado para tornar o aprendizado de Libras mais dinâmico e eficaz para um público diversificado, que inclui crianças, jovens e adultos, sejam surdos ou ouvintes. A ferramenta se diferencia ao integrar duas tecnologias centrais:
                    </p>
                    <p>
                      <strong>1. Visão Computacional para Feedback Interativo:</strong> Utilizando a câmera do celular, o aplicativo captura os movimentos do usuário. Um módulo de inteligência artificial, desenvolvido com MediaPipe para rastreamento de pontos-chave das mãos e TensorFlow para treinar uma rede neural (provavelmente LSTM), analisa a execução dos sinais em tempo real. Isso permite que o aplicativo forneça um feedback instantâneo, informando se o gesto foi executado corretamente, algo que as ferramentas de tradução atuais não fazem.
                    </p>
                    <p>
                      <strong>2. Gamificação para Engajamento:</strong> Para combater a monotonia e aumentar a motivação, o HandMind terá uma interface gamificada. Elementos de jogos, como um sistema de níveis, acúmulo de pontos e animações de acerto ou erro, serão implementados para criar um ciclo de aprendizado contínuo e engajador. Ao final, espera-se ter um protótipo funcional capaz de reconhecer um conjunto de sinais com acurácia satisfatória (acima de 85%), servindo como um valioso material de apoio tanto para o estudo autônomo quanto para uso em salas de aula, promovendo a inclusão e a difusão da Língua Brasileira de Sinais.
                    </p>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </header>

        <section className="container text-center my-4">
          <h2 className="mb-3">Contagem Regressiva para a Defesa Final</h2>        
            <div className="row justify-content-center">
              <div className="col-md-6">            
                <Countdown />
              </div>
            </div>    
        </section>
        <hr />
        
        <section id="funcionalidades" className="container my-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Funcionalidades Principais</h5>
                  <p className="card-text">
                    <ul>
                      <li>Reconhecimento de sinais em tempo real via câmera.</li>
                      <li>Interface gamificada com níveis e pontuação. </li>
                      <li>Módulo de prática com feedback interativo para avaliação.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Tecnologias Utilizadas</h5>
                  <p className="card-text">
                    <ul>
                      <li><b>Visão Computacional:</b> MediaPipe e TensorFlow. </li>
                      <li><b>Desenvolvimento Mobile:</b> App nativo para Android. </li>
                      <li><b>Linguagem (IA):</b> Python para o modelo de reconhecimento. </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Benefícios e Impacto</h5>
                  <p className="card-text">
                    <ul>
                      <li>Aumenta a motivação e o engajamento no aprendizado de Libras. </li>
                      <li>Funciona como material de apoio para estudo autônomo e em sala. </li>
                      <li>Promove a inclusão e difusão da Língua Brasileira de Sinais. </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    
      <footer id="contato" className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-1">Desenvolvido por: Lucas Marques da Cunha</p>
          <p className="mb-1">Curso: Especialização em Desenvolvimento Web e Mobile</p>
          <p className="mb-0">Contato: <a href="mailto:lucas.m.cunha@email.com" className="text-white">lucas.marques@unir.com</a></p>
          <p className="mt-2">
            <a href="https://github.com/lucasmarquesc" target="_blank" rel="noopener noreferrer" className="text-white me-3">GitHub</a>
            <a href="https://www.linkedin.com/in/lucas-marques-74577565/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;