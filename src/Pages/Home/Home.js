import './Home.css';
import aboutImg1 from "../../images/Carousel-1-7-2024-ru-en.jpg"
import aboutImg2 from "../../images/Carousel-2-7-2024-ru-en.jpg"
import aboutImg3 from "../../images/Carousel-3-7-2024-ru-en.jpg"
import aboutImg4 from "../../images/Carousel-4-7-2024-ru-en.jpg"
import aboutImg5 from "../../images/Carousel-5-7-2024-ru-en.jpg"
import aboutImg6 from "../../images/Carousel-6-7-2024-ru-en.jpg"
import middleImg from "../../images/Middle-1-8-2024.jpg"
import middleImg1 from "../../images/Middle-2-8-2024.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function Home() 
 
 {
    return (
      <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      
      >
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg1} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg2} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg3} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg4} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg5} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg6} alt="" /> </Link>
        </SwiperSlide>
        
        ...
      </Swiper>
      <div className="container_mid flex"> 
        <div className="card_middle"> <img src={middleImg} alt="" className="mid"/>
        <h2 className="middle">К ПОДВИГАМ ГОТОВ</h2>
        <Link className="middle" to="https://faberlic.com/index.php?option=com_catalog&view=seriesitem&id=1000249210417&Itemid=2075">Серия Lancelot</Link>
        
        </div>
        <div className="card_middle"> <img src={middleImg1} alt="" className="mid"/>
        <h2 className="middle"> ФОРМУЛА ПОБЕДЫ</h2>
        <Link className="middle" to ="https://faberlic.com/index.php?option=com_flippingbook&view=catalog"> Смотреть каталог</Link>
        </div>
        
        
        </div>
     
     </>
    );
    
  };
export default Home
