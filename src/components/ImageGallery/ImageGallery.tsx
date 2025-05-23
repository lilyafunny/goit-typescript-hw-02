import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"
import { Photos } from "../../Services/api";


type Props = {
    photos: Photos[];
    onImageClick: (url: string) => void;
}

const ImageGallery = ({ photos, onImageClick }: Props) => {

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



