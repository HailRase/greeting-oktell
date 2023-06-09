import React, {useState} from 'react';
import s from './ErrorWindow.module.scss'
import {ReactComponent as ErrorIcon} from "../../../assets/error-message.svg";
import {Alert} from "react-bootstrap";

type ErrorWindowType = {
    errorMessage: string
}
const ErrorWindow: React.FC<ErrorWindowType> = ({errorMessage}) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            /*<div className={s.errorWindowContainer}>
                <div className={s.errorWindowHeader}>
                    <ErrorIcon width={25} height={25}/>
                        <span className={s.errorWindowHeaderTitle}>Ошибка</span>
                </div>
                <div className={s.errorWindowBody}>
                    <span>{errorMessage}</span>
                </div>

            </div>*/
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Ошибка!</Alert.Heading>
                <p>
                    {errorMessage}
                </p>
            </Alert>
        );
    }
    return <></>

};

export default ErrorWindow;