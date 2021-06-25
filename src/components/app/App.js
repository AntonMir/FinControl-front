// routes
import {BrowserRouter as Router} from 'react-router-dom';
// components
import useRoutes from '@components/routes/Routes.js'
import Header from '@components/header/Header.js';
// hooks
import {useAuth} from '@src/hooks/auth.hook.js'
// context
import {AuthContext} from '@src/context/AuthContext.js'
// styles
import './app.scss';
import 'materialize-css';



export default function App() {

    // берем из хука аутентификации
    const {login, logout, token, userId, userName} = useAuth();

    // флаг, который показывает, есть ли токен(вошел ли пользователь)
    const isAuthenticated = !!token;

    const routes = useRoutes(isAuthenticated);

    return (
        // AuthContext - является контекстом, но он должен быть обязательно провайдером
        <AuthContext.Provider 
            // передаем в наш контекст матоды и переменные из хука аутентификации
            value={{token, userId, userName, login, logout, isAuthenticated}}
        >
            <Router>
                { isAuthenticated && <Header /> }

                <section className="container">
                    {routes}
                </section>

            </Router>

        </AuthContext.Provider>
    )
}

