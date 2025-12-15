import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Project = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/project')
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.log(err))
    })
    return (
        <div className='container bg-[#191919] shadow-[30px_30px_30px_rgba(0,0,0,0.3)]'>
            <div className="blog mt-24 mb-10 flex-col justify-center ">
                <p className="project-list font-poppins font-extrabold text-[40px] text-white text-center pt-20">Мой список <span
                        className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">проектов</span>
                </p>
                {blog.map((item) => (

                    <div className="card-center  bg-[#2A2A2A] w-[871px] h-[486px] m-auto rounded-[52px] mt-20"
                         key={item.id}>
                        <div className="card-body flex">
                            <img className="w-[400px] h-400px bg-white mt-10 ml-7" src={item.path} alt="blog"/>
                            <div className="card-body_text ml-4 mt-16 flex-col text-white font-poppins relative">
                                <h1 className="text-2xl leading-tight font-extrabold">
                                    {item.name}
                                </h1>
                                <p className="text-[14px] mt-7 font-bold w-96">{item.Description}</p>
                                <div className="dataLink">
                                    <p className="absolute bottom-0">ДАТА: <span
                                        className="text-[#848484]">{item.Data}</span></p>
                                    <Link to={`/project/${item.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="size-6 text-white absolute bottom-0 right-3">
                                            <path fillRule="evenodd"
                                                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>)

};

export default Project;