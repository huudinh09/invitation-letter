import styles from './App.scss';
import classNames from 'classnames/bind';
import images from './assests/image';
import { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';

const cx = classNames.bind(styles);
const path =
    'https://www.google.com/maps/place/H%E1%BB%99i+tr%C6%B0%E1%BB%9Dng+R%C3%B9a+%C4%90HCT/@10.0293309,105.7669089,17z/data=!3m1!4b1!4m6!3m5!1s0x31a0883cc7d53ab5:0x329aed4526fa14de!8m2!3d10.0293309!4d105.7694838!16s%2Fg%2F1tg6s66p?entry=ttu';

function App() {
    const [popup, setPopup] = useState(false);
    const [style, setStyle] = useState({});

    const handleHide = () => {
        setStyle({ transform: 'scale(0) translateY(-40px)' });
        setPopup(false);
    };

    const handleShow = () => {
        setStyle({ transform: 'scale(1) ' });
        setPopup(true);
    };

    return (
        <div className={cx('container')}>
            {!popup || (
                <div style={style} onClick={handleHide} className={cx('wrapper')}>
                    <div className={cx('popup')}>
                        <a target="_blank" rel="noreferrer" href={path}>
                            <IoLocationOutline className={cx('icon')} />
                            Hoi truong Rua
                        </a>
                        <a className={cx('phone')} href="tel:+84859081355">
                            <BsTelephone className={cx('icon-phone')} />
                            Call Dinh: 0859 081 355
                        </a>
                    </div>
                </div>
            )}
            <img onClick={handleShow} className={cx('image')} src={images.image} alt="background" />
        </div>
    );
}

export default App;
