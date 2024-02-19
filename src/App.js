import React from 'react';
import './App.css';
import Perfil from './componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis YouTubers Favoritos</h1>
        <Perfil
          nombre='Brais Moure'
          pais='España'
          imagen='brais'
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil='Ingeniero de software desde 2010. Actualmente trabaja como desarrollador freelance full-stack. Además, crea contenido formativo y divulga sobre programación y desarrollo de software en redes como @mouredev. Fundador de la empresa Moure.dev'
          redesSociales={{
            linkedin: 'https://es.linkedin.com/in/braismoure',
            youtube: 'https://www.youtube.com/@mouredev',
            twitter: 'https://twitter.com/MoureDev'
          }}
        />
        <Perfil
          nombre='Romuald Fons'
          pais='España'
          imagen='romuald'
          cargo='SEO & Marketer'
          empresa='Big SEO'
          perfil='Fundador del holding BIGSEO, Best 100 Influencer (Forbes 2021), Top Business Influencer (Eshow 2022) y reconocido como uno de los marketers más influyentes a nivel internacional.

          Hace más de 10 años que Romuald Fons ayuda a empresas y emprendedores a mejorar sus negocios con marketing digital, impulsando la mayor comunidad de SEO de habla hispana del mundo y formando a más de 1 millón de personas en sus redes sociales.'
          redesSociales={{
            linkedin: 'https://es.linkedin.com/in/romuald-fons-30523658',
            youtube: 'https://www.youtube.com/@RomualdFonsTV',
            twitter: 'https://twitter.com/RomualdFons'
          }}
        />
        <Perfil
          nombre='Nicolás Schürmann Lindemann'
          pais='Chile'
          imagen='nicolas'
          cargo='Ingeniero de Software'
          empresa='Hola Mundo'
          perfil='Es un Youtuber Chileno, ingeniero de software desde hace 8 años, trabajar con PHP nodeJS, react y react native. Es el fundador de la empresa de desarrollo de software Hola Mundo'
          redesSociales={{
            linkedin: 'https://nz.linkedin.com/in/nicolasschurmann',
            youtube: 'https://www.youtube.com/@HolaMundoDev',
            twitter: 'https://twitter.com/_nasch_'
          }}
        />
      </div>
    </div>
  );
}

export default App;
