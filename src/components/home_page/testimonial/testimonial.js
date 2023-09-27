import './testimonial.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {
    return (
        <>
            <h1 className='mt-5'>Testimonials</h1>

            <Swiper spaceBetween={30} loop={true} centeredSlides={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} pagination={{ clickable: true, }}
                navigation={true} modules={[Autoplay, Pagination, Navigation]} initialSlide={1} className="mySwiper" >

                <div className='container'>
                    <div className='testimonial'>
                        <div>
                            <SwiperSlide>
                                <div className='slide my-5'>
                                    <img src='images/profile.jpg' alt='' className='profile_image'/>
                                    <p>"I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs."</p>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='leftQuote' />
                                    <div className='details'>
                                        <span>Liv Morgan</span>
                                        <span>client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide my-5'>
                                    <img src='images/profile2.jpg' alt='' className='profile_image'/>
                                    <p>"I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs."</p>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='leftQuote' />
                                    <div className='details'>
                                        <span>Liv Morgan</span>
                                        <span>client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide my-5'>
                                    <img src='images/profile3.jpg' alt='' className='profile_image'/>
                                    <p>"I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs."</p>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='leftQuote' />
                                    <div className='details'>
                                        <span>Liv Morgan</span>
                                        <span>client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                </div>
            </Swiper>

        </>
    )
}

export default Testimonial;