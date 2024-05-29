import React, {useState, useEffect} from 'react';
import { useSwiper } from 'swiper/react';
import { RightArrow } from '../../../assets/RightArrow';
import styles from './CarouselRightNav.module.css';

function CarouselRightNav() {

    const swiper = useSwiper();
    const[isEndd, setIsEndd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEndd(swiper.isEnd);
        }, [isEndd]);
    });

  return (
    <div className={styles.rightNavButton}>
        {!isEndd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNav