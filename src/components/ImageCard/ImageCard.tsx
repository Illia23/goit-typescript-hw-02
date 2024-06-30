import React from 'react';
import item from './ImageCard.module.css';

interface ImageData {
  urls: {
    small: string; 
    regular: string; 
  };
  alt_description: string; 
}

interface ImageCardProps {
  data: ImageData;
  onClick: (url: string) => void; 
}

const ImageCard: React.FC<ImageCardProps> = ({ data, onClick }) => {
  return (
    <li className={item.item}>
      <img
        className={item.img}
        src={data.urls.small}
        alt={data.alt_description}
        onClick={() => onClick(data.urls.regular)}
      />
    </li>
  );
};

export default ImageCard;
