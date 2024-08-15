import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import { useGlobalContext } from '@/ContextApi';

export default function SwiperSelection() {
  const { darkModeObject: { darkMode } } = useGlobalContext();

  return (
    <div className={`${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"} p-3 rounded-lg flex justify-between items-center gap-5`}>
      <div className='overflow-x-auto max-w-full w-full'>
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className='bg-main p-1 rounded-md text-white w-20 flex-shrink-0'>
            All
          </SwiperSlide>
          {[...Array(50)].map((_, index) => (
            <SwiperSlide key={index} className='text-slate-400 w-20 flex-shrink-0'>
              Slide {index + 2}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className='bg-main p-1 rounded-md px-3 flex gap-1 items-center text-white flex-shrink-0'>
        <AddOutlinedIcon sx={{ fontSize: 18 }} />
        <span>Tag</span>
      </button>
    </div>
  );
}
