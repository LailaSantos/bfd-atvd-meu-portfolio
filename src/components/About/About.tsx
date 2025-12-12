import Footer from "../Footer/Footer";
import "./About.css";


function About() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <>
      <section className="about-container">
        <div className="about-card">
          <img src={base + "/assets/eu.png"} alt="Minha foto" className="about-photo" />

          <div className="about-info">
            <p>
              Opaa, meu nome é Laila, desde que tive meu primeiro contato com
              HTML e CSS, me apaixonei pelo mundo do Front-End. Gosto de
              participar de eventos de programação, acho muito legal você
              compartilhar o que aprende. Tenho experiência com desenvolvimento
              mobile utilizando Kotlin para Android, além de já ter trabalhado
              com Angular e React usando TypeScript no desenvolvimento web.
              Possuo formação técnica em Desenvolvimento Web e graduação em
              Análise e Desenvolvimento de Sistemas. Sigo explorando novas
              tecnologias, encarando desafios e transformando cada aprendizado
              em novas oportunidades.
            </p>
            <div className="about-contact">
              <h2>Contato</h2>

              <p className="email-container">
                E-mail:
                <a
                  href="mailto:lailaroberta100@gmail.com"
                  className="email-link"
                >
                  lailaroberta100@gmail.com
                </a>
              </p>

              <div className="about-buttons">
                <a href="https://github.com/LailaSantos" target="_blank">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/laila-roberta-3972b9196/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
