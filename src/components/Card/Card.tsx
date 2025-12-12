import "./Card.css";

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  siteUrl?: string;
}

function Card({ title, description, imageUrl, githubUrl, siteUrl }: CardProps) {
  return (
    <>
      <div className="card">
        <img src={imageUrl} alt="Imagem do Projeto" />

        <h2>{title}</h2>
        <p>{description}</p>

        <div className="buttons">
          {githubUrl && (
            <a className="btn-github" href={githubUrl} target="_blank">
              GitHub
            </a>
          )}

          {siteUrl && (
            <a className="btn-site" href={siteUrl} target="_blank">
              Visitar Site
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
