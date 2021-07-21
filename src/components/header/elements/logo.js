// Link
import { Link } from 'react-router-dom';
// img
import logo from '@img/header/logo.png';
// styles
import styled from 'styled-components';

export default function Logo() {

    return (
        <CustomLink to="/">
            <IMG src={logo} alt="logo"/>
            <H1>Finance Control</H1>
        </CustomLink>

    )
}

const CustomLink = styled(Link)`
    flex: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.24);
    padding: 0 20px;
    text-decoration: none;
    user-select: none;
    height: 75%;

    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
`;

const IMG = styled.img`
    width: auto;
    height: 75%;
    margin-right: 10px;
`;

const H1 = styled.h1`
    line-height: 30px;
    color: #AAE03D;
    padding: 0 0 5px 0;
    margin: 0;
    font-size: 25px;
    white-space: nowrap;
`;


