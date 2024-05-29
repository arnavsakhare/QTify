import React, { useEffect } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CarouselLeftNav from './CarouselLeftNav/CarouselLeftNav';
import CarouselRightNav from './CarouselRightNav/CarouselRightNav';



function Controls({data}){
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);

    return <></>;
}

function Carousel({data, renderComponent}) {
  return (
    <>
        <Swiper
            modules={[Navigation]}
            initialSlide={0}
            slidesPerView={"auto"}
            spaceBetween={48}
            allowTouchMove
        >
            <Controls data={data}/>
            <CarouselLeftNav />
            <CarouselRightNav />

            {data.map((ele, idx) => (
                <SwiperSlide style={{ width: "auto"}} key={idx}>{renderComponent(ele)}</SwiperSlide>
            ))}

        </Swiper>
    </>
  )
}

export default Carousel