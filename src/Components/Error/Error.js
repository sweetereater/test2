import s from './Error.module.css';

function Error(props) {
    return (
        <div className={s.backDrop}>
            <div className={s.errorPanel}>
                Произошла ошибка!
                <button className={s.newRequest} onClick={props.handleClick}> Повторить запрос </button>
            </div>
        </div>
    )
}

export default Error;