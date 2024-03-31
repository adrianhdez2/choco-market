import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types'

function Gallery({ images }) {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={`/${item}`} alt="" loading='lazy' />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Gallery

Gallery.propType = {
    images: PropTypes.array.isRequired
}