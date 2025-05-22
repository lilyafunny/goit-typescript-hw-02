import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onChangePage }) => {
    return (
        <>
            <button className={s.btnLoad} onClick={onChangePage}>
                Load more
            </button>
        </>
    );
};

export default LoadMoreBtn