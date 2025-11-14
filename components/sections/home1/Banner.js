'use client'
import { useState, useEffect } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ContactForm from '@/components/ContactForm';
import { useSearchParams } from 'next/navigation';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
     const [countryValue, setCountryValue] = useState('');
        const [originValue, setOriginValue] = useState('');
    const searchParams = useSearchParams();
      useEffect(() => {
            const origin = searchParams.get('origin');
            const country = searchParams.get('country');
    
            if (origin) {
                if (origin.toLowerCase() === 'meta') {
                    setOriginValue('Meta');
                } else if (origin.toLowerCase() === 'google') {
                    setOriginValue('Google Ads');
                } else {
                    setOriginValue('');
                }
            } else {
                setOriginValue('');
            }
    
            if (country) {
                const formattedCountry = country
                    .replace(/_/g, ' ')
                    .toLowerCase()
                    .replace(/\b\w/g, (char) => char.toUpperCase());
                setCountryValue(formattedCountry);
            } else {
                setCountryValue('');
            }
        }, [searchParams]);
  return (
    <>
    
    <section className="main-slider main-slider-one" id="home">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
        <SwiperSlide className="swiper-slide image_container">
          <div className="image-layer" 
          style={{ backgroundImage: 'url(https://cdn.properties.emaar.com/wp-content/uploads/2020/04/DHE_COMMUNITY_HERO-resize-1620x832.jpeg)' }}
          >
            </div>
            <div className="custom_container main_wrapper row">
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
<div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                        <div className='banner_text_container'>
         <div>
             <p className='small_heading' style={{lineHeight: "1.2"}}>DUBAI HILLS ESTATE</p>
          <h3 style={{lineHeight: "1.2"}} className='main_heading_margin'>
  Own a Luxury Home Starting at <span className="line-break">{countryValue == "Saudi Arabia" ? "AED 1.62M" : "GBP 338K.*"}</span>
</h3>
         </div>

        <p className="down_styling" style={{lineHeight: "1.5"}}>EARN EXCEPTIONAL RETURNS ON YOUR PROPERTY INVESTMENT
IN DUBAI’S MOST SOUGH-AFTER LOCATIONS.</p>
  <div className='resp_usd'>
        <p className="down_styling" style={{lineHeight: "1.5"}}>
  *USD 442K / EUR 384K {countryValue == "Saudi Arabia" ? " / GBP 338K" : ""}
</p>

<p className="down_styling" style={{lineHeight: "1.5"}}>
  *Subject to Availability
</p>
 <p className="down_styling" style={{lineHeight: "1.5"}}>
  *The Global Prices may vary as per the Exchange Rate
</p>

      </div>
        </div>
                        {/* <div className="btn-box">
                            <div className="btn-one btn-one-form">
                                <Link className="thm-btn" href="#contact-form">
                                    <span className="txt">REGISTER INTEREST</span>
                                </Link>
                            </div>
                        </div> */}
                    </div>

                   
                </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
<div className="main-slider-one__single_form">
                    <div className="main-slider-one__content">
                        <ContactForm/>
                    </div>

                   
                </div>
                </div>
            </div>
        </SwiperSlide>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="main-slider-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div>
      </Swiper>
    </section>
    </>
  );
};

