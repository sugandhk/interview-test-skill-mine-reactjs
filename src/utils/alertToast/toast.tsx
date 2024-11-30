import React, { useEffect, useState } from 'react';
import "./toast.scss"
import { Images } from '../images/image';

type ToastProps = {
    message?: string;
    type?: any;
};

const Toast: React.FC<ToastProps> = ({ message, type }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 30000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;
    return (
        <div className={`toast`}>

            <div
                className={"cross-icon"}
                dangerouslySetInnerHTML={{
                    __html: Images.CROSS_ICON.img,
                }} />
            {message}

        </div>
    );
};

export default Toast;
