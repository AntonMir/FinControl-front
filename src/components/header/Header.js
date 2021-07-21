import {useContext} from 'react';
// components
import Logo from '@header/elements/logo.js';
import Nav from '@header/elements/nav.js';
import User from '@header/elements/user.js';
import LogOutBtn from '@header/elements/logoutbtn.js';
import AuthBtns from '@header/elements/authbtns.js';
// context
import {AuthContext} from '@src/context/authcontext.js';
// styles
import styled from 'styled-components';


export default function Header() {

    const auth = useContext(AuthContext);

    if(auth.isAuthenticated) {
        return (
            <HeaderStyled>
                <Logo />
                <Nav />
                <User />
                <LogOutBtn /> 
            </HeaderStyled>
        )
    }

    return (
        <HeaderStyled>
            <Logo />
            <AuthBtns />      
        </HeaderStyled>
    )   

}

const HeaderStyled = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background-color: #444;
    height: 80px;
    padding: 0 3%;
`;
