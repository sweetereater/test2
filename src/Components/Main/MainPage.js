import s from './MainPage.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadDataTC, setError } from '../../redux/mainReducer';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';

function MainPage(props) {

    const pageState = useSelector(state => state.mainPage);
    const { data, isFetching, error } = pageState;

    const dispatch = useDispatch();

    useEffect(() => {
        if (data.length === 0) {
            dispatch(loadDataTC);
        }
    }, []);

    const handleClick = () => {
        dispatch(setError(false));
        dispatch(loadDataTC)
    }

    return (
        <div className={s.container}>
            {error && <Error handleClick={handleClick} />}
            {
                isFetching ?
                    <Preloader /> :
                    data.map(item => (
                        <NavLink className={s.link} to={`/${item.id}/details`} key={item.id} >
                            {item.name}
                        </NavLink>
                    ))}
        </div>
    )
}

export default MainPage;