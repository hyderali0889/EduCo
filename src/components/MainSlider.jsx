import '../assets/css/MainSlider.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CompanyProfileCard from './CompanyProfilee.card';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([ Pagination, Navigation ]);

export default function App() {
	return (
		<div className="backSlider">
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				slidesPerGroup={3}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true
				}}
				navigation={true}
				className="mySwiper"
			>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
				<SwiperSlide>
					<CompanyProfileCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
