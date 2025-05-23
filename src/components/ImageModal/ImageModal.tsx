import Modal from "react-modal";
import s from './ImageModal.module.css'

Modal.setAppElement('#root');

type Status = {
    isOpen: boolean;
    onClose: () => void;
    image: string | null;

}

const ImageModal: React.FC<Status> = ({ isOpen, onClose, image }) => {

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {

        if (e.target === e.currentTarget) {
            onClose()
        }
    };
    if (!image) return null;

    return (

        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                overlayClassName={s.overlay}
                className={s.modal}
                shouldCloseOnOverlayClick={true}
            >
                <img src={image} className={s.img} />
            </Modal >
        </>

    )


}

export default ImageModal

