import React, {useEffect} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./sections/Header/Header"
import Footer from "./sections/Footer/Footer"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForumPostPage from "./pages/ForumPostPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import userServices from "../redux/user/userServices";
import ForumSectionPage from "./pages/ForumSectionPage";
import ForumSubCategoryPage from "./pages/ForumSubCategoryPage";

require('./App.scss')

function App() {
    useEffect(userServices.me, [])

    return (
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/profile/settings'} component={ProfileSettingsPage}/>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/signup'} component={SignUpPage}/>
                <Route path={'/sections/:pk'} component={ForumSectionPage}/>
                <Route path={'/subcategories/:pk'} component={ForumSubCategoryPage}/>
                <Route path={'/posts/:pk'} component={ForumPostPage}/>
            </Switch>

            <Footer/>
        </BrowserRouter>
    )
}

export default App