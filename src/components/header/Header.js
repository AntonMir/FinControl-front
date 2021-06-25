import {useContext} from 'react';
// Link
import { Link } from 'react-router-dom';
// context
import {AuthContext} from '@src/context/AuthContext.js';
// img
import logo from '@img/header/logo.png';
import user from '@img/header/user.svg';
// styles
import './header.scss';

export default function Header() {

    try{
        const auth = useContext(AuthContext);

        const logoutHandler = (event) => {
            event.preventDefault();
            auth.logout();
        }


        return (
            <div className="header">
                
                <Link className="header-logo" to="/">
                    <img src={logo} alt="logo"/>
                    <h1>Finance Control</h1>
                </Link>

                <div className="header-nav-wrapper">
                    <ul className="header-nav">
                        <li className="header-nav-el">
                            <Link to="/">Расходы</Link>
                        </li>
                        <li className="header-nav-el">
                            <Link to="/">Доходы</Link>
                        </li>
                        <li className="header-nav-el">
                            <Link to="/">График</Link>
                        </li>
                        {/* <li className="header-nav-el">
                            <Link to="/">Финансовый календарь</Link>
                        </li> */}
                       
                    </ul>
                </div>

                <Link className="header-user-icon" to="auth">
                    <img src={user} alt="user"/>
                    <p className="user-name">
                        {auth.userName ? auth.userName.toUpperCase() : ''}
                    </p>
                </Link>

                <Link className="logout-btn" to="/" onClick={logoutHandler}>Выйти</Link>

            </div>
        )
    } catch(error) {
        console.error('---', 'ERROR!!! - ', error);
    }
}

