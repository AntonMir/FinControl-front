/*
* - после успешного этапа создания аутентификации
* создадим кастомный хук, отвечающий за авторизацию
* - Это модуль, который работает исключительно для авторизации 
* - хук, позволяющий зайти в систему или выйти из нее
*/
import {useState, useCallback, useEffect} from 'react';

export const useAuth = () => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);


    const login = useCallback((jwtToken, id, userName) => {
        setToken(jwtToken);
        setUserId(id);
        setUserName(userName);

        localStorage.setItem('userData', JSON.stringify({
            userId: id, token: jwtToken, userName: userName
        }))
    }, [])


    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setUserName(null)

        localStorage.removeItem('userData');
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));

        if (data) {
            login(data.token, data.userId, data.userName)
        }
    }, [login])


    return { login, logout, token, userId, userName };
}