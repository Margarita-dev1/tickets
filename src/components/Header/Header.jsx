import React from "react";
import Logo from "../../Logo/Logo";
import ScrollAnimation from 'react-animate-on-scroll'

import {MENU} from "../../utils/constants";
import {Link} from "react-router-dom";
import {Socials} from "../Socials/Socials";

const Header = () => {
    return (
        <section className="header">
            <div className="container">
                <header>
                    <Logo/>
                    <nav className='menu'>
                        {MENU.map(({link, name}, i) => (
                            <ScrollAnimation key={name} className="menu-item" animateIn='fadeInDown' delay={i * 100} offset={0} duration={0.1}>
                                <Link to={`/${link}`}>
                                    {name}
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </nav>
                    <Socials/>
                </header>
            </div>
        </section>
    )
}

export default Header;