import s from './LoadMoreBtn.module.css'

type Props = {
    onChangePage: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onChangePage }) => {
    return (
        <>
            <button className={s.btnLoad} onClick={onChangePage}>
                Load more
            </button>
        </>
    );
};

export default LoadMoreBtn