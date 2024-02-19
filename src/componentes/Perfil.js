import React from 'react';
import '../estilos/Perfil.css';

// Importa los iconos de las redes sociales
import LinkedInIcon from '../icons/linkedin.svg';
import YoutubeIcon from '../icons/youtube.svg';
import TwitterIcon from '../icons/twitter.svg';

function Perfil(props) {
    return (
        <div className='contenedor-perfil'>
            <img
                className='imagen-perfil'
                src={require(`../imagenes/perfil-${props.imagen}.webp`)}
                alt='Foto de desarrollador'
            />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-perfil'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-perfil'>"{props.perfil}" </p>
                <div className="redes-sociales">
                    <a href={props.redesSociales.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" className="red-social" />
                    </a>
                    <a href={props.redesSociales.youtube} target="_blank" rel="noopener noreferrer">
                        <img src={YoutubeIcon} alt="YouTube" className="red-social" />
                    </a>
                    <a href={props.redesSociales.twitter} target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" className="red-social" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
