import React from 'react'
// routes
import { Switch, Route, Redirect } from 'react-router-dom'
// components
import AuthPage from '@components/authpage/authpage.js';
import WelcomePage from '@content/welcome/welcome.js'
// import CreatePage from '@components/createPage/CreatePage.js';
// import DetailPage from '@components/detailPage/DetailPage.js';
// import LinksPage from '@components/linksPage/LinksPage.js';



export default function useRoutes(isAuthenticated) {
    
    if(isAuthenticated) {
        // это для человека, который зашел в систему
        return (
            <Switch>
                {/* <Route exact path="/links" component={LinksPage}/>
                <Route exact path="/create" component={CreatePage}/>
                <Route path="/detail/:id" component={DetailPage}/> */}
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path="/auth" component={AuthPage}/>
            <Redirect to="/"/>
        </Switch>
    )
}