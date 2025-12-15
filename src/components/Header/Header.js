import React, {useState} from "react";
import "./Header.css";
import logo from '../../img/header/logo.svg'
import {Link} from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (<div className="header top-0 left-0 right-0 blue-black shadow-md h-[82px]">
        <nav className="container blue-black flex justify-between items-center h-full">
            <div className="logo text-2xl font-bold "><Link to="/"><img src={logo} alt="logo"
                                                                        className="click-animation"/></Link></div>
            <ul className="nav-links lg:flex space-x-16 text-white hidden">
                <li className="nav"><Link to='/' className="hover:text-zinc-400 click-animation">Главная</Link></li>
                <li className="nav"><Link to='/Project' className="hover:text-zinc-400 click-animation">Мои проекты</Link>
                </li>
                <li className="nav"><Link to='/Contact' className="hover:text-zinc-400 click-animation">Контакты</Link>
                </li>
            </ul>
            <section className="lg:hidden flex">
                <div className="space-y-2" onClick={() => setOpen((prev) => !prev)}>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                </div>
                <div className={open ? "showMenuNav" : "hideMenuNav"}>
                    <div className="absolute top-0 bottom-0 right-0 px-8 py-8" onClick={() => setOpen(false)}>
                        <svg
                            className="h-8 w-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                    <ul className="absolute flex flex-col justify-between items-center text-white text-2xl min-h-[250px]">
                        <li className="nav"><Link to='/'>Главная</Link></li>
                        <li className="nav"><Link to='/Project'>Мои проекты</Link></li>
                        <li className="nav"><Link to='/Contact'>Контакты</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>

    </div>);
};

export default Header;
