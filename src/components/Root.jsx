import React from 'react';
import '../assets/styles/components/Root.scss';

const Root = () => {
    return (
        <div className="root">
            <div className="root__text">
                <h1>MOVIE TIME API</h1>
                <p>
                    Esta es un API de prueva para seleccionar peliculas de un catalago y gurdarlas en base a el usuario registrado 
                    en una instancia de MongoDB. Para usar la API por favor registrese moviendo el mouse sobre el icono arriba a la 
                    derecha y acto seguido podra loggearse.
                </p>
            </div>
        </div>
    );
}

export default Root;