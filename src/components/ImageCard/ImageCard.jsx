import s from "./ImageCard.module.css"

const ImageCard = ({ item, onImageClick }) => {

    return (

        < div className={s.contanier}>
            <img src={item.urls.small} alt={item.alt_description
            } className={s.img} onClick={() => onImageClick(item.urls.regular)} />
        </div>

    )

}

export default ImageCard