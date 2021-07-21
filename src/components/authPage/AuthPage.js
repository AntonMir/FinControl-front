import React, {useState, useEffect, useContext} from 'react';
// castom hook
import {useHttp} from '../../hooks/http.hook.js'
import {useMessage} from '../../hooks/message.hook.js'
// context
import {AuthContext} from '@src/context/authcontext.js'
// img
import logo from '@img/header/logo.png';
// styles
import './authpage.scss';


export default function AuthPage() {

    // 1 элемент затеняется, 2 выделяется
    const [targetOpacity, setTargetOpacity] = useState('login');

    // используем контекст кторый создали (AuthContext)
    // это нужно, чтобы воспользоваться методом login
    const auth = useContext(AuthContext)

    // кастомный хук для вывоа ошибки
    const message = useMessage();

    // кастомный хук для отправки данных
    const {loading, error, request, clearError} = useHttp();

    // state для email и pass
    const [form, setForm] = useState({email: '', password: ''});

    // обработаем ошибку
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);

    // сохраняем в наш state email и password
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    // вызывает хук useHttp, отправляет запрос на сервер,
    // получает ответ в виде промиса и выводит его на экран
    // A) при регистрации
    const registerHandler = async () => {
        try {
            // регистрируемся
            const regData = await request('/api/auth/register', 'POST', {...form})
            message(regData.message)
            // если зарегались успешно, сразу вхдим
            const loginData = await request('/api/auth/login', 'POST', {...form})
            auth.login(loginData.token, loginData.userId, loginData.userName)
        } catch(e) {}
    }
    // B) при авторизации
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.userName)
        } catch(e) {}
    }

    return (
        <div className="auth-page">
            <div className="auth-title" to="/">
                <img src={logo} alt="logo"/>
                <h1>Welcome to Finance Control</h1>
            </div>

            <div className="auth-forms">

                <div 
                    onMouseEnter={() => setTargetOpacity('login')}
                    className={targetOpacity === 'login' ? "login active" : "login"} 
                >
                    <h1>Вход</h1>
                    <div className="login-form">
                        <input 
                            placeholder="Email" 
                            id="login-email" 
                            type="text"
                            name="email" 
                            onChange={changeHandler}
                        />

                        <input 
                            placeholder="Password" 
                            id="login-password" 
                            type="password" 
                            name="password" 
                            onChange={changeHandler}
                        />
                        <button 
                            onClick={loginHandler}
                            disabled={loading}
                        >Войти</button>
                    </div>
                </div>

                <div 
                    className={targetOpacity === 'register' ? "register active" : "register"} 
                    onMouseEnter={() => setTargetOpacity('register')}
                >
                    <h1>Регистрация</h1>
                    <div className="register-form">
                        <input 
                            placeholder="Email" 
                            id="register-email" 
                            type="text"
                            name="email" 
                            onChange={changeHandler}
                        />

                        <input 
                            placeholder="Password" 
                            id="register-password" 
                            type="password" 
                            name="password" 
                            onChange={changeHandler}
                        />
                        <button 
                            onClick={registerHandler}
                            disabled={loading}
                        >Зарегистрироваться</button>
                    </div>
                </div>
           
            </div>

        </div>
    )
}

