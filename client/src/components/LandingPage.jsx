import React from 'react'
import img from '../pokeLanding.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div
        style={{backgroundImage: `url(${img})`, height: "100vh", backgroundSize: "cover"}}>
            <h1 className="animate__animated animate__backInDown">Welcome to my Pokedex!</h1>
            <Link to="/home">
                <button>Explore!</button>
            </Link>
        </div>
    )
}

export default LandingPage