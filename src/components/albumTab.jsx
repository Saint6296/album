import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css';
import thumbTabName from '../pathSettings.js';

const AlbumTab = ({ onSelectTab, selectedItem }) => {
  const [highlightPosition, setHighlightPosition] = useState(0); // 管理高亮位置
  const highlightRef = useRef(null); // 引用高亮元素

  useEffect(() => {
    // 在组件加载时设置高亮位置
    const activeTab = document.querySelector('.tabName.active');
    if (activeTab) {
      setHighlightPosition(activeTab.offsetLeft);
    } else if (thumbTabName.length > 0) {
      // 如果没有活动标签，默认选择第一个标签
      const firstTab = document.querySelector('.tabName');
      if (firstTab) {
        setHighlightPosition(firstTab.offsetLeft);
      }
    }
  }, []);

  const handleTabClick = (item, index) => {
    onSelectTab(item); // 调用传入的函数
    const tab = document.querySelector(`.tabName:nth-child(${index + 1})`);
    if (tab) {
      highlightRef.current.style.width = `${tab.offsetWidth}px`;
      highlightRef.current.style.transform = `translateX(${tab.offsetLeft}px)`;
    }
  };

  return (
    <div className='albumTabs'>
      <div 
        className='tabHighlight' 
        ref={highlightRef} 
        style={{ 
          left: `${highlightPosition}px`, // 使用 highlightPosition 更新位置
          width: highlightRef.current ? `${highlightRef.current.offsetWidth}px` : '143px' // 确保宽度正确
        }} 
      />
      <ul>
        {thumbTabName.map((item, index) => (
          <li 
            key={index} 
            onClick={() => handleTabClick(item, index)} 
            className={`tabName ${selectedItem === item ? 'active' : ''}`} // 根据 selectedItem 设置 active 类
          >
            {item}
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default AlbumTab;