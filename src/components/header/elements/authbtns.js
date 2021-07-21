import {useContext} from 'react';
// context
import {AuthContext} from '@src/context/authcontext.js'
// Link
import { Link } from 'react-router-dom';
// styled
import styled from 'styled-components';


export default function AuthBtns() {

    const auth = useContext(AuthContext);

    return (
        <div>
            <CustomLink to="/auth">Войти</CustomLink>
            <span>/</span>
            <CustomLink to="/auth">Регистрация</CustomLink>
        </div>
    )
}

const CustomLink = styled(Link)`
    margin: 0 20px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    &:hover {
        border-bottom: 1px #000 solid;
    }
`;
