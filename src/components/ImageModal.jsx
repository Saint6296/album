import React from 'react';
import '../styles/style.css'; // 添加样式文件

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = imageUrl.split('/').pop(); // 使用原图的文件名
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // 释放内存
      })
      .catch(err => console.error('下载失败:', err));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-buttons'>
            <button className="download-button" onClick={handleDownload}>
            下载原图
            </button>
            <button className="close-button" onClick={onClose}>关闭</button>
        </div>
        <img src={imageUrl} alt="原图" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal; 