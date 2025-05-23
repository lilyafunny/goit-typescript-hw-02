import React from "react";
import s from "./ImageCard.module.css"
import { Photos } from "../../Services/api";


type Props = {
    item: Photos;
    onImageClick: (url: string) => void;
};

const ImageCard: React.FC<Props> = ({ item, onImageClick }) => {

    return (

        < div className={s.contanier}>
            <img src={item.urls.small} alt={item.alt_description
            } className={s.img} onClick={() => onImageClick(item.urls.regular)} />
        </div>

    )

}

export default ImageCard