import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import modalStyles from './ImageModal.module.css';

interface ImageModalProps {
  closeModal: () => void;
  url: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ closeModal, url }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => {
        closeModal();
        setIsOpen(false);
      }}
      contentLabel="Image Modal"
      className={modalStyles.container}
      overlayClassName={modalStyles.overlay}
      ariaHideApp={false}
    >
      <img className={modalStyles.img} src={url} alt="modal_img" />
    </ReactModal>
  );
};

export default ImageModal;
