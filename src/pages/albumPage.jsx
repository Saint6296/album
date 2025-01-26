import React, { useState, useEffect } from 'react';
import '../styles/style.css'
import AlbumTab from '../components/albumTab';
import AlbumList from '../components/albumList';
import thumbTabName from '../pathSettings.js'; // 导入 tab 名称

const AlbumPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // 在组件加载时设置默认选中的 tab
        setSelectedItem(thumbTabName[0]); // 默认激活第一个 tab
    }, []); // 仅在组件挂载时执行

    const handleSelectTab = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='albumPage'>
            <AlbumTab onSelectTab={handleSelectTab} selectedItem={selectedItem} />
            <AlbumList key={selectedItem} selectedItem={selectedItem} />
        </div>
    );
}

export default AlbumPage;