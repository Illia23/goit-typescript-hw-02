import React from 'react';
import button from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  click: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ click }) => {
  return (
    <div className={button.container}>
      <button className={button.btn} onClick={click}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
