import React from 'react';
import Fade from 'react-reveal/Fade';
import { ReactComponent as Arrow } from './Assets/down-arrow.svg';
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className='hero-container'>
            <Fade top>
                <h2>Welcome to</h2>
            </Fade>
            <Fade delay={500}>
                <h1>Movify</h1>
            </Fade>
            <div className='bounce'>
                <Link
                activeClass="active"
                to="movies"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                >
                    <Arrow className='arrow' />
                </Link>
                </div>
        </div>
    )
}

export default Hero;
