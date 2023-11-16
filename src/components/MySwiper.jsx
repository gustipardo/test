import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function ImageSlider({ props }) {
console.log(props)
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.frontmatter.imagenes.map((image, index) => (
        <SwiperSlide key={index}>
         <img src={`../../public/${props.url}/${image}`} alt={`Image ${index + 1}`} />
        </SwiperSlide>

      ))}
      <SwiperSlide><img src="../../public/1.jpg"/></SwiperSlide>
      <SwiperSlide><img src="../../public/3.jpg"/></SwiperSlide>
      <SwiperSlide><img src="../../public/2.png"/></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
