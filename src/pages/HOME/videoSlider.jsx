import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import videoSliderBg from "../../assets/images/videoSliderBg.png";
import video1 from "../../assets/images/video1.png";
import video2 from "../../assets/images/video2.png";
import video3 from "../../assets/images/video1.png";

export default function VideoSlider() {
    return (
        <section className="w-full py-24 overflow-hidden" style={{ backgroundImage: `url(${videoSliderBg})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
            <div className="w-full px-0">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="video-swiper !overflow-visible [&_.swiper-slide]:!bg-transparent"
                >
                    {[video1, video2, video3, video1, video2].map((img, index) => (
                        <SwiperSlide key={index} className="!bg-transparent">
                            {({ isActive }) => (
                                <div
                                    className={`relative transition-all duration-700 ease-out overflow-hidden bg-transparent ${isActive
                                        ? "scale-110 sm:scale-125 z-20"
                                        : "scale-90 z-10"
                                        }`}
                                    style={{
                                        transformOrigin: "center center",
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="Video preview"
                                        className="w-full aspect-video object-cover bg-transparent"
                                    />

                                    {/* Play Icon */}
                                    {/* <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-50"
                                        }`}>
                                        <div className={`border-2 border-white rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? "w-16 h-16" : "w-12 h-12"
                                            }`}>
                                            <svg
                                                className={`text-white ml-1 transition-all duration-500 ${isActive ? "w-6 h-6" : "w-4 h-4"
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div> */}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

