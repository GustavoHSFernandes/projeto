import React from "react"
import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from "swiper/element/bundle";
import { useState, useEffect } from "react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { Card } from '../listproducts/card'

register()


export const Body = () => {
    const [slidePerView, setSlidePerView] = useState(2)
    const data = [
        { id: '1', image: 'https://images.vexels.com/content/194701/preview/online-shopping-slider-template-d1aa6f.png' },
        { id: '2', image: 'https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png' },
        { id: '3', image: 'https://i.pinimg.com/originals/b6/c9/17/b6c9173bd58f62f49eb550635a5e259f.jpg' },
        { id: '4', image: 'https://i.pinimg.com/736x/c0/c0/68/c0c0688a33511ddf927c2e9f2af478ca.jpg' },
    ]

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1)
            }else{
                setSlidePerView(2)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <div className="container">
            <Swiper
              slidesPerView={slidePerView}
              pagination={{ clickable: true}}
              navigation
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                         src={item.image}
                         alt="Slider"
                         className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <section className="card-container">
                <Card/>
                <Card/>
                <Card/>
            </section>
            
        </div>
    )
}