import { useState } from 'react';

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
                <ul className='header__menu-list' >
                    <li className='header__menu-link'>All Tasks</li>
                    <li className='header__menu-link'>Completed</li>
                    <li className='header__menu-link'>You need to do</li>
                    <li className='header__menu-link'>Folders</li>
                </ul>
            </div>
            <div className="app__header-text">ToDO App</div>
        </header>
    )
}

export default Header



