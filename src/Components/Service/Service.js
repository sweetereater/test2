import s from './Service.module.css';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadServiceDataTC, setError } from '../../redux/serviceReducer';
import Preloader from '../Preloader/Preloader';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Error from '../Error/Error';


function Service(props) {

    const { isFetching, error } = useSelector(state => state.servicePage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadServiceDataTC(props.match.params.id))
    }, [props.match.params.id]);

    const handleClick = () => {
        dispatch(setError(false))
        dispatch(loadServiceDataTC(props.match.params.id))
    }

    return (
        <div className={s.container}>
            {error && <Error handleClick={handleClick} />}
            {
                isFetching ? <Preloader /> : <ServiceInfo />
            }
        </div>
    )
}

export default withRouter(Service);