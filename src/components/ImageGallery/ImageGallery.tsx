
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import list from './ImageGallery.module.css';

interface ImageData {
  id: number;
  url: string;
  title: string;
}

interface ImageGalleryProps {
  data: ImageData[];
  openModal: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data, openModal }) => {
  return (
    <ul className={list.ul}>
      {data.map(dat => (
        <ImageCard key={dat.id} data={dat} onClick={openModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
