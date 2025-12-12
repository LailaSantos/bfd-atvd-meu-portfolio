import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./Home.css";
import fokus from "../../assets/fokus.png";
import discord from "../../assets/discord.png";
import nba from "../../assets/nba.png";
import f1 from "../../assets/f1.png";

function Home() {
  return (
    <>
      <div className="cards-container">
        <Card
          title="Projeto Fokus"
          description="Este projeto foi desenvolvido para fins de estudo, 
         com o objetivo de aprofundar o conhecimento em JavaScript, manipulando o DOM."
          imageUrl={fokus}
          githubUrl="https://github.com/LailaSantos/Projeto-Fokus"
          siteUrl="https://projeto-fokus.netlify.app/"
        />

        <Card
          title="Projeto Clone Discord"
          description="Este projeto foi desenvolvido para fins de estudo, seguindo um tutorial da Rocketseat. 
          É uma página estática inspirada no Discord e foi publicada no Netlify."
          imageUrl={discord}
          githubUrl="https://github.com/LailaSantos/yt-clone-discord"
          siteUrl="https://clone-discord-react.netlify.app/"
        />

        <Card
          title="Projeto NBA"
          description="Este projeto foi desenvolvido para o curso Bolsa Futuro Digital da Softex Pernambuco, com o objetivo de praticar os conteúdos aprendidos nos primeiros módulos do curso, 
         utilizando HTML, CSS e JavaScript, além de aplicar conceitos de responsividade nas telas."
          imageUrl={nba}
          githubUrl="https://github.com/LailaSantos/programa-bolsa-futuro-digital-softex-recife"
          siteUrl="https://lailasantos.github.io/programa-bolsa-futuro-digital-softex-recife/index.html#inicio"
        />

        <Card
          title="Projeto F1 Surveys"
          description="Este projeto foi desenvolvido para fins de estudo, com o objetivo de aprofundar o conhecimento em JavaScript, HTML e CSS no contexto de desenvolvimento web. Além disso, 
         o projeto permite que você conheça as equipes e pilotos da temporada 2023 da Fórmula 1."
          imageUrl={f1}
          githubUrl="https://github.com/LailaSantos/f1-surveys"
          siteUrl="https://f1-surveys.netlify.app/"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
