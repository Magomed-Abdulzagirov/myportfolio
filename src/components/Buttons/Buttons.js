import React from "react";
import './Buttons.css'
import CV from '../../assets/File/CV.pdf'

const Buttons = () =>{



return (
    <div className="buttons m-[54px] flex justify-center items-center">
        <a href={CV} target="_blank" rel="noreferrer"><button className="touch click-animation bg-white text-[21px] text-black rounded-[50px] w-[195px] h-[64px] mr-[18px]" >Контакты</button></a>
        <a href={CV} target="_blank" rel="noreferrer"><button className="download click-animation bg-[#161513] text-[21px] text-white  rounded-[50px] w-[195px] h-[64px] border-2 border-white">Мое резюме</button></a>
</div>
);
};

export default Buttons;