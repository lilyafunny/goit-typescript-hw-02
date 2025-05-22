import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ photos, onImageClick }) => {

    return (

        <ul className={s.ul}>
            {photos.map(item => (
                <li className={s.li} key={item.id} >
                    <div >
                        <ImageCard item={item} onImageClick={onImageClick} />
                    </div>
                </li>
            ))}
        </ul>

    )

}

export default ImageGallery



