import React, { useEffect } from "react";
import Image from "next/image";
import sliderImg from "../../assets/images/slider/i1.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const HomeSlider = () => {
	return (
		<div className="home_slider_container">
			<div className="page_container_slider">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">DUOKAST</h1>
							</div>

							<div className="row pt-5">
								<Swiper
									effect={"coverflow"}
									grabCursor={true}
									centeredSlides={true}
									breakpoints={{
										// when window width is >= 640px
										640: {
											slidesPerView: 1,
										},
										// when window width is >= 768px
										768: {
											slidesPerView: 2,
										},
									}}
									coverflowEffect={{
										rotate: 50,
										stretch: 0,
										depth: 100,
										modifier: 1,
										slideShadows: true,
									}}
									pagination={true}
									className="mySwiper"
								>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<Image src={sliderImg} alt="" />
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSlider;
