import s from './ServiceInfo.module.css';
import { useSelector } from 'react-redux';


function ServiceInfo() {

    const serviceInfo = useSelector(state => state.servicePage.service);

    return (
        <div className={s.serviceInfoContainer}>
            <h1>{serviceInfo.name}</h1>
            <p>{serviceInfo.content}</p>
            <h3>Цена - {serviceInfo.price}</h3>
        </div>
    )
}

export default ServiceInfo;