import Swiper from 'swiper';
import {Navigation, Mousewheel, Autoplay } from 'swiper/modules'
import {Image} from 'astro:assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Mousewheel, Autoplay],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});

const Hero = () => {

    const categories = [
        {
            id: 1,
            name: 'Tech Blogs'
        },
        {
            id: 2,
            name: 'Tech Tutorials'
        },
        {
            id: 3,
            name: 'Code Snippets'
        },
        {
            id: 4,
            name: 'Projects'
        },
    ]

    return (
        <div className={'swiper border-2'}>
            <div className="swiper-wrapper">
                {/*// <!-- Slides -->*/}
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                ...
            </div>


            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    )
}

export default Hero;
