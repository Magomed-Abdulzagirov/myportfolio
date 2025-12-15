import React, {Component} from 'react';
import x from './ProjectsPhoto/x.svg'
import you from './ProjectsPhoto/youtube.svg'
import instar from './ProjectsPhoto/instagram.svg'
import EmailIcon from './ProjectsPhoto/EmailIcon.svg'

class Footer extends Component {


    render() {
        return (<div className="footer bg-[#191919] mt-auto">
                <div className="container h-[418px]">
                    <div className="contact">
                        <h1 className="font-poppins font-bold text-2xl text-white pt-20">Мои контакты</h1>
                        <p className="pt-9 pb-6">Я открыт для предложений о стажировке, учебных проектах и возможностях
                            для роста как фронтенд-разработчик. Всегда готов к новым вызовам и
                            интересным задачам.</p>
                        <a href="mailto:Mabdulzagirov@yandex.ru" alt='mail' className="self-baseline flex"><img src={EmailIcon} alt="email" className="email pr-1"/> Mabdulzagirov@yandex.ru</a>
                    </div>
                    <div className="footer-icons flex justify-between w-[109px] mt-10">
                        <img src={instar} alt="insta"/>
                        <img src={x} alt="x"/>
                        <img src={you} alt="youtube"/>
                    </div>
                </div>
            </div>);
    }
}

export default Footer;