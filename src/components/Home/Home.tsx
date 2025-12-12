import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
   const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className="cards-container">
        <Card
          title="Projeto Fokus"
          description="Este projeto foi desenvolvido para fins de estudo, 
         com o objetivo de aprofundar o conhecimento em JavaScript, manipulando o DOM."
          imageUrl={base + "assets/fokus.png"}
          githubUrl="https://github.com/LailaSantos/Projeto-Fokus"
          siteUrl="https://projeto-fokus.netlify.app/"
        />

        <Card
          title="Projeto Clone Discord"
          description="Este projeto foi desenvolvido para fins de estudo, seguindo um tutorial da Rocketseat. 
          É uma página estática inspirada no Discord e foi publicada no Netlify."
          imageUrl={base + "assets/discord.png"}
          githubUrl="https://github.com/LailaSantos/yt-clone-discord"
          siteUrl="https://clone-discord-react.netlify.app/"
        />

        <Card
          title="Projeto NBA"
          description="Este projeto foi desenvolvido para o curso Bolsa Futuro Digital da Softex Pernambuco, com o objetivo de praticar os conteúdos aprendidos nos primeiros módulos do curso, 
         utilizando HTML, CSS e JavaScript, além de aplicar conceitos de responsividade nas telas."
          imageUrl={base + "assets/nba.png"}
          githubUrl="https://github.com/LailaSantos/programa-bolsa-futuro-digital-softex-recife"
          siteUrl="https://lailasantos.github.io/programa-bolsa-futuro-digital-softex-recife/index.html#inicio"
        />

        <Card
          title="Projeto F1 Surveys"
          description="Este projeto foi desenvolvido para fins de estudo, com o objetivo de aprofundar o conhecimento em JavaScript, HTML e CSS no contexto de desenvolvimento web. Além disso, 
         o projeto permite que você conheça as equipes e pilotos da temporada 2023 da Fórmula 1."
          imageUrl={base + "assets/f1.png"}
          githubUrl="https://github.com/LailaSantos/f1-surveys"
          siteUrl="https://f1-surveys.netlify.app/"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
