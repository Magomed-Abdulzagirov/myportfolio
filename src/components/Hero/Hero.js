import "./Hero.css";
import Logo from "../../img/header/logo.svg";
import Buttons from "../Buttons/Buttons";
import React from "react";
import js from "../../assets/LogoStack/javascript.svg"
import nodejs from "../../assets/LogoStack/nodejs.svg"
import html from "../../assets/LogoStack/html.svg"
import css from "../../assets/LogoStack/css.svg"
import reactJS from "../../assets/LogoStack/reactjs.svg"

const Hero = () => {
  return (
    <div className="header top-0 left-0 right-0 h-full">
      <div className="container flex flex-col items-center space-y-4">
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[235px] h-[235px] mt-[91px] max-md:w-[100px]"/>
        </div>
        <div className="hero text-white text-[32px] w-[670px] h-[146px] font-bold max-md:text-2xl text-center"><p>Я начинающий React разработчик</p> <p>создаю современные <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">веб-приложения</span></p></div>
        <div className="heroLittle text-[18px] w-[650px] max-md:text-2xl max-md:w-[400px]">
            Я начинающий Фронтенд-разработчик, который активно изучает React.js,
            JavaScript и современные веб-технологии. В данный момент прохожу обучение
            и создаю свои первые проекты для портфолио.
        </div>
      </div>
        <Buttons />
        <div className="stacks container text-center">
            <h1 className="experiences text-[#C5C5C5] text-[20px] font-bold">Используемый стак</h1>
            <div className="icons-stack flex justify-evenly items-center mt-12 ">
                <img src={js} alt="js" className="logo-stack"/>
                <img src={nodejs} alt="nodejs" className="logo-stack"/>
                <img src={html} alt="html" className="logo-stack"/>
                <img src={css} alt="css" className="logo-stack"/>
                <img src={reactJS} alt="reactJS" className="logo-stack"/>
            </div>
        </div>
    </div>
  );
};

export default Hero;
