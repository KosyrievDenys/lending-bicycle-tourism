import React from "react";

//libs
import { useSwiper } from "swiper/react";

//assets
import styles from './SwiperButtons.module.scss';
import arrowLong from '../../images/icons/arrow-long.svg';

export const SwiperButtons = () => {

  const swiper = useSwiper();

  return (
    <div className={styles.swiperButtons}>
      <button onClick={() => swiper.slidePrev()}>
        <img src={arrowLong} alt='' />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={arrowLong} alt='' />
      </button>
    </div>
  )
}