import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.css';

function Slider({ images }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const startSlider = () => {
      intervalId = setInterval(() => {
        const scrollWidth = slider.scrollWidth;
        const clientWidth = slider.clientWidth;
        const targetScroll = scrollWidth - clientWidth - 20;
        if (slider.scrollLeft >= targetScroll) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
      }, 10);
    };

    startSlider();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div ref={sliderRef} className={styles.slider}>
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
