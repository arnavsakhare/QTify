import React, {useState, useEffect} from 'react';
import { useSwiper } from 'swiper/react';
import { LeftArrow } from '../../../assets/LeftArrow';
import styles from './CarouselLeftNav.module.css';

function CarouselLeftNav() {

    const swiper = useSwiper();
    const[isStart, setIsStart] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsStart(swiper.isBeginning);
        }, [isStart]);
    });

  return (
    <div className={styles.leftNavButton}>
        {!isStart && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNav