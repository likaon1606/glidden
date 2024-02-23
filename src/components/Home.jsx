import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="container-video">
        <video className="video" loop autoPlay muted>
          <source src="./assets/header.mp4" />
        </video>
        <div className="parrafo">
          <h1>
            ¡ESTO <br />
            PINTA <br />
            BIEN!
          </h1>
          <p>
            Glidden, <br />
            contigo, siempre.
          </p>
          <button>Dónde comprar</button>
        </div>
      </div>
      <div className="video-down">
        <div>
          <h1>
            ¡Glidden te trae las <br /> mejores promociones!
          </h1>
        </div>
        <div>
          <p>Aprovecha el super precio de Glide On Ultra y Acrimate.</p>
          <p>¡Glidden, contigo siempre!</p>
          <button>Busca la tienda más cercana</button>
        </div>
      </div>
    </>
  );
};

export default Home;
