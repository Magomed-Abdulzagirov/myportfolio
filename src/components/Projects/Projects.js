import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Projects = () => {

    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/project')
            .then(res => res.json())
            .then(data => setProject(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="project container">
            <p className="proj flex justify-center items-center mt-24 bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent text-[36px] font-poppins font-extrabold">Проекты</p>
            <div className='flex flex-wrap justify-evenly mt-7'>
                {project.map((item) => (
                    <div className="card w-[390px] mb-6" key={item.id}>
                        <div className="card-body rounded-[18px] overflow-hidden bg-[#2A2A2A] relative z-10">
                            <img src={item.path} alt="img" className="card-img-top w-full h-[235px] object-cover bg-white"/>
                            <div className="card-text flex justify-between items-center">
                            <div className="click font-poppins font-extrabold h-[66px] ml-4 mt-3">
                                <a href={`/project/${item.id}`}><p className="clickHere text-[10px] text-[#C5C5C5]">Перейти к проекту</p></a>
                                <p className="nameProject text-[19px] text-[#FFFFFF]">{item.name}</p>
                            </div>
                            <div className="card-icon mr-3">
                                <Link to={`/project/${item.id}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-6 text-white">
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
        </div>);
}

export default Projects;