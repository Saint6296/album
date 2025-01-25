import React, { useState } from 'react';
import ImageModal from './ImageModal'; // 导入模态框组件

// 预先导入所有可能的图像
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// 导入所有子文件夹中的图像
const images = importAll(require.context('../assets/images/thumb', true, /\.(png|jpe?g|svg)$/));

const AlbumList = ({ selectedItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // 设置默认文件夹
  const defaultFolder = '春节';
  const folderToLoad = selectedItem || defaultFolder;

  // 获取对应文件夹的图像
  const folderImages = Object.keys(images).filter(image => image.includes(folderToLoad));
  const imageList = folderImages.map((image, index) => ({
    url: images[image],
    caption: `Slide ${index + 1}`
  }));

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="albumList">
      <div className="image-gallery">
        {imageList.length > 0 ? (
          imageList.map((image, index) => (
            <div key={index} className="image-container" onClick={() => openModal(image.url)}>
              <canvas id={`canvas-${index}`} className='thumbnail-canvas' />
              <img 
                src={image.url} 
                alt={image.caption} 
                onLoad={(e) => {
                  const canvas = document.getElementById(`canvas-${index}`);
                  const ctx = canvas.getContext('2d');
                  const img = e.target;

                  const scale = 150 / img.width; // 设置缩略图宽度为150px
                  canvas.width = 150;
                  canvas.height = img.height * scale;
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }} 
                style={{ display: 'none' }} // 隐藏原图
              />
            </div>
          ))
        ) : (
          <p>没有找到相关图片。</p>
        )}
      </div>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageUrl={currentImage} />
    </div>
  );
};

export default AlbumList;