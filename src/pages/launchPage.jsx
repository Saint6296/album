import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/style.css'
import { Link } from 'react-router-dom';

const LaunchPage = () => {
  // 使用 require.context 动态导入图片
  const images = require.context('../assets/images/slide', false, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().map((image, index) => {
    return {
      url: images(image),
      caption: `Slide ${index + 1}`
    };
  });

  const slideSettings = {
    autoplay: true, // 自动播放
    duration: 3000, // 自动播放速度（毫秒）
    transitionDuration: 500, // 切换效果持续时间（毫秒）
    indicators: false, // 显示分页器
    infinite: true, // 无限循环
    arrows: false, // 显示导航箭头
  }

  return (
    <div className='launchPage'>
        <Link to='/album'>
            <div className='jumpBtn'>
                <p>跳过</p>
            </div>
        </Link>
        <Slide {...slideSettings}>
            {imageList.map((slide, index) => (
            <div key={index}  className='custom-slider'>
                <img src={slide.url} alt={slide.caption} />
            </div>
            ))}
        </Slide>
    </div>
  );
}

export default LaunchPage;