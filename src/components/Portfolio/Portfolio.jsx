
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Ecommerce from '../../img/ecommerce.jpg';
import movie from '../../img/movie.png';
import Duo from '../../img/duo.png';
import Color from '../../img/color.png';
import bubble from '../../img/bubble.jpg';
import Todolist from '../../img/todolist1.png';
import 'swiper/css';
import { Themecontext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
       const theme=useContext(Themecontext);
       const darkMode=theme.state.darkMode;
  return (
    <div className='portfolio' id='portfolio'>
      {/* heading */}
      <span style={darkMode?{color:"white"}:{color:"black"}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
       <Swiper 
       spaceBetween={30}
       slidesPerView={'auto'}
       grabCursor={true}
       className='portfolio-slider'
       >
       <SwiperSlide>
       <a title='Ecommerce website' href="https://movieshow001.netlify.app/" target='_blank'><img src={movie} alt="" /></a> 
       </SwiperSlide>

       <SwiperSlide>
       <a title='Ecommerce website' href="https://rahul-pall.github.io/EcommerceWebsite/" target='_blank'><img src={Ecommerce} alt="" /></a> 
       </SwiperSlide>

       <SwiperSlide>
       <a title='Animated website' href="https://rahul-pall.github.io/Sundown-studioClone/" target='_blank'><img src={Duo} alt="" /></a>            
       </SwiperSlide>

       <SwiperSlide>
       <a title='Bubble game' href="https://rahul-pall.github.io/Bubble-Game/" target='_blank'><img src={bubble} alt="" /></a>             
       </SwiperSlide>

       <SwiperSlide>
       <a title='Notes app' href="https://rahul-pall.github.io/notes-app/" target='_blank'><img src={Todolist} alt="" /></a>
       </SwiperSlide>

       <SwiperSlide>
       <a title='Color app' href="https://rahul-pall.github.io/color-code-generator/" target='_blank'><img src={Color} alt="" /></a> 
       </SwiperSlide>
       </Swiper>
    </div>
  )
}
export default Portfolio
