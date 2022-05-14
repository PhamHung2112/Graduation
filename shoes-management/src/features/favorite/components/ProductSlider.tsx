import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface ProductSliderProps {
  imageList?: string[];
  productId: number | any;
  checkSize: boolean;
}

const ProductSlider: FC<ProductSliderProps> = ({ imageList, productId, checkSize }) => {
  const [activeThumb, setActiveThumb] = useState<any>();

  return (
    <>
      <Swiper modules={[Thumbs]} loop={true} grabCursor={true} thumbs={{ swiper: activeThumb }}>
        {imageList?.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={`/product/${productId}`}>
              <img
                src={image}
                alt="home-product"
                width="100%"
                height="100%"
                style={{
                  filter: checkSize ? 'none' : 'brightness(0.4)',
                  opacity: checkSize ? 1 : 0.8,
                }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        slidesPerView={3}
        spaceBetween={10}
        onSwiper={setActiveThumb}
        className="home-product-slider"
      >
        {imageList?.map((image, index) => (
          <SwiperSlide key={index} className="home-product-slider-item">
            <img src={image} alt="home-product-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
