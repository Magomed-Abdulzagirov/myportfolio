import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ProjectPosts = () => {
    const [post, setPost] = useState(null);
    const [markdownContent, setMarkdownContent] = useState('');
    const {id} = useParams();

    React.useEffect(() => {
        fetch(`http://localhost:7000/project/${id}`)

            .then(res => res.json())
            .then(data => {
                setPost(data);
                // Если post.body содержит путь к markdown файлу
                return fetch(data.body);
            })
            .then(res => res.text())
            .then(text => setMarkdownContent(text))
            .catch(err => console.log(err))
    }, [id])

    return (

        <div className="container bg-[#191919] shadow-[30px_30px_30px_rgba(0,0,0,0.3)]">
            <div className="post flex flex-col items-center w-full mt-20 mb-32">
                {post && (
                    <div key={post.id} className='flex flex-col justify-center w-[800px]'>
                        <h1 className='text-white font-poppins font-extrabold text-[100px]'>{post.name}</h1>
                        <p className='text-white font-extrabold font-poppins text-[20px]'>Дата: {post.Data}</p>
                        <img src={post.path} alt="path"
                             className="w-[845px] h-[500px] bg-white rounded-3xl mt-12 mb-10"/>
                        <div className="marDown text-white flex flex-col items-center pt-10 text-2xl">
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}

export default ProjectPosts;