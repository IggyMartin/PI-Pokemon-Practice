import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMe() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <div>
                <h2>About Me</h2>
                <p>Hola! Me llamo Ignacio y soy un programador Full-Stack. Comencé a interiorizarme en el mundo de la programación en épocas de pandemia. Luego de un tiempo de aprender y dar los primeros pasos de forma autodidacta, decidí ingresar al bootcamp intensivo de Henry.
                   Soy una persona comunicativa y con alta capacidad de innovación, que en conjunto con mi persistencia y pasión por el código, genero buenos resultados a la hora de trabajar en equipo y en la resolución de problemas. Desde que conocí el código, mi interés en aprender e interiorizarme solo han de aumentar.
                   Estoy trabajando en proyectos para así poder mejorar e intensificar mis conocimientos como Desarrollador Web.
                </p>
            </div>
            <div>
               <h2>Contact Me</h2>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/ignaciomartinfsd">Linkedin</a>
                <br></br>
                <a target="_blank" rel="noreferrer" href="https://github.com/IggyMartin">GitHub</a>
                <p><strong>email</strong>: ignaciomartinit@gmail.com</p>
            </div>

        </div>
    )
}