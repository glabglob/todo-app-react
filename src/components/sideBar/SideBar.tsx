
import './sidebar.scss';

const SideBar: React.FC = () => {

    const smt: number = 1;

    return (
        <ul className='header__menu-list' >
            <li className='header__menu-link'>All Tasks</li>
            <li className='header__menu-link'>Completed</li>
            <li className='header__menu-link'>You need to do</li>
            <ul className='header__menu-list folderList'>
                <li className='header__menu-link' >Folder name {`(${smt})`}</li>
                <li className='header__menu-link' >Folder name {`(${smt + 2})`}</li>
                <li className='header__menu-link' >Folder name {`(${smt + 7})`}</li>
            </ul>
        </ul>
    );
}

export default SideBar;