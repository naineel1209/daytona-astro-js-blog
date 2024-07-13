import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

const Hero = () => {
    const categories = [
        {
            id: 1,
            name: 'Tech Blogs',
            bgColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
            txtColor: 'text-white',
        },
        {
            id: 2,
            name: 'Tech Tutorials',
            bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
            txtColor: 'text-white',
        },
        {
            id: 3,
            name: 'Code Snippets',
            bgColor: 'bg-gradient-to-r from-red-500 to-pink-500',
            txtColor: 'text-white',
        },
        {
            id: 4,
            name: 'Projects',
            bgColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
            txtColor: 'text-white',
        },
    ];

    return (
        <div className={'swiper mb-[3rem]'}> <style>
            {`@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

                .heading {
                    font - family: "Montserrat", sans-serif;
                font-weight: 900;
                font-optical-sizing: auto;
                font-style: normal;
                letter-spacing: 0.2rem;
                text-transform: uppercase;
                }`
            }
        </style>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Mousewheel]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2000
                }}
                speed={500}
                mousewheel={true}
                style={{ height: '100%' }}
            >
                {
                    categories.map((category) => {
                        return (
                            <SwiperSlide key={category.id} className={`swiper-slide justify-center p-[2rem] heading ${category.bgColor} rounded-lg text-center`}>
                                <span className={`${category.txtColor} text-[5rem]`} >{category.name}</span>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Hero;
