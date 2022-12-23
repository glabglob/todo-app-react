import { useState } from 'react';

import SideBar from '../sideBar/SideBar';

import './header.scss';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const menuToggleHandler = (): void => {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <header className='app__header'>
            <div className="header__menu-toggler" onClick={() => menuToggleHandler()}></div>
            <div className={isOpen ? 'header__menu menu-opened' : 'header__menu'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={isOpen ? 'header__menu-content content-opened' : 'header__menu-content'}>
                <SideBar />
            </div>
            <div className="app__header-text">ToDO App</div>
        </header>
    )
}

export default Header



