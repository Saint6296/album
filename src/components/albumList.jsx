import React from 'react';

// 预先导入所有可能的图像
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

// 导入所有子文件夹中的图像
const images = importAll(require.context('../assets/images/thumb', true, /\.(png|jpe?g|svg)$/));

const AlbumList = ({ selectedItem }) => {
  // 设置默认文件夹
  const defaultFolder = '春节';
  const folderToLoad = selectedItem || defaultFolder; // 如果没有选中项，则使用默认文件夹

  // 获取对应文件夹的图像
  const folderImages = Object.keys(images).filter(image => image.includes(folderToLoad));
  const imageList = folderImages.map((image, index) => ({
    url: images[image],
    caption: `Slide ${index + 1}`
  }));

  return (
    <div className="albumList">
      <div className="image-gallery">
        {imageList.length > 0 ? (
          imageList.map((image, index) => (
            <img key={index} src={image.url} alt={image.caption} />
          ))
        ) : (
          <p>没有找到相关图片。</p> // 如果没有图片，显示提示信息
        )}
      </div>
    </div>
  );
};

export default AlbumList;