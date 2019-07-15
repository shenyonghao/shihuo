import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
// import css from '../index.module.scss'    
// console.log(css)
class HomeSwiper extends Component {
  render() {
    return <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"> <img src="http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1" alt="" /></div>
          <div className="swiper-slide"> <img src="http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1" alt="" /></div>
          <div className="swiper-slide"><img src="http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1" alt="" /></div>
          <div className="swiper-slide"><img src="http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1" alt="" /></div>
          <div className="swiper-slide"><img src="http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1" alt="" /></div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </div>
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }

    });
  }
}



export default HomeSwiper