import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./sections/Header/Header"
import Footer from "./sections/Footer/Footer"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {useDispatch, useSelector} from "react-redux";
import {userMeAction} from "../redux/user/userActions";
import ForumCategoryPage from "./pages/ForumCategoryPage";
import ForumPostPage from "./pages/ForumPostPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";

require('./App.scss')

function App() {
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(userMeAction())
        },
        []
    )

    return (
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/profile/settings'} component={ProfileSettingsPage}/>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signup'} component={SignUpPage}/>
                <Route path={'/categories/:pk'} component={ForumCategoryPage}/>
                <Route path={'/posts/:pk'} component={ForumPostPage}/>
            </Switch>

            <Footer/>
        </BrowserRouter>
    )
}

export default App