import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import thumbTabName from '../pathSettings.js';

// 预先导入所有图像
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// 导入所有子文件夹中的图像
const images = importAll(require.context('../assets/images/thumb', true, /\.(png|jpe?g|svg|webp)$/));

const AlbumTab = ({ onSelectTab }) => {
  const [tabBackground, setTabBackground] = useState([]);

  useEffect(() => {
    const imageList = thumbTabName.map((tabName) => {
      // 获取对应子文件夹的第一张图
      const folderImages = Object.keys(images).filter(image => image.includes(tabName));
      return folderImages.length > 0 ? images[folderImages[0]] : null; // 取第一张图
    });
    setTabBackground(imageList);
  }, []); // 添加依赖项数组

  const handleTabClick = (item) => {
    console.log(`Clicked tab: ${item}`);
    onSelectTab(item); // 调用传入的函数
  };

  return (
    <div className='albumTabs'>
      <ul>
        {thumbTabName.map((item, index) => (
          <li key={index} onClick={() => handleTabClick(item)}>
            <p>{item}</p>
            <div className={`tabName ${onSelectTab === item ? 'hover' : ''}`} />
            <img src={tabBackground[index]} alt={item} />
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default AlbumTab;