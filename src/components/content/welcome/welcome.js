// Link
import { Link } from 'react-router-dom';
// img
import background from '@assets/img/welcome/welcome_background.png'
// styled
import styled from 'styled-components';


export default function WelcomePage() {

    return (
        <Welcome>
            <H1>Привет дорогой друг, данное приложение поможет тебе контролировать свои финансы. Давай начнем:</H1>
            <CustomLink to="/auth">Вход/Регистрация</CustomLink>
        </Welcome>
    )
}

const Welcome = styled.div`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: calc(100vh - 80px);
    color: #fff;
`;

const H1 = styled.h1`
    margin: 0 0 30px 0;
    padding: 0;
`;

const CustomLink = styled(Link)`
    border: #000 1px solid;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
`;
