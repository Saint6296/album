import React, { useState } from 'react';
import '../styles/style.css'
import AlbumTab from '../components/albumTab';
import AlbumList from '../components/albumList';

const AlbumPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectTab = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='albumPage'>
            <AlbumTab onSelectTab={handleSelectTab} />
            <AlbumList selectedItem={selectedItem} />
        </div>
    );
}

export default AlbumPage;