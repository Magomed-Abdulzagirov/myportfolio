import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";


const Home = () => {
    return (
        <div className='bg-[#161513]'>
            <Hero/>
            <Projects/>
        </div>
    )
}

export default Home;