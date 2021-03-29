import React, {useEffect} from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./sections/Header/Header"
import Footer from "./sections/Footer/Footer"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ForumPostPage from "./pages/ForumPostPage"
import ProfileSettingsPage from "./pages/ProfileSettingsPage"
import userServices from "../redux/user/userServices"
import ForumSectionPage from "./pages/ForumSectionPage"
import ForumSubCategoryPage from "./pages/ForumSubCategoryPage"
import tuningServices from "../redux/tuning/tuningServices";
import pagesServices from "../redux/pages/pagesServices";
import InfoPage from "./pages/InfoPage";

require('./App.scss')

function App() {
    useEffect(userServices.me, [])
    useEffect(tuningServices.loadSiteSettings, [])
    useEffect(pagesServices.listFetch, [])

    return (
        <Router basename={''}>
            <Header/>

            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/profile/settings'} component={ProfileSettingsPage}/>
                <Route exact path={'/login'} component={LoginPage}/>
                <Route exact path={'/signup'} component={SignUpPage}/>
                <Route exact path={'/sections/:pk'} component={ForumSectionPage}/>
                <Route exact path={'/subcategories/:pk'} component={ForumSubCategoryPage}/>
                <Route exact path={'/posts/:pk'} component={ForumPostPage}/>
                <Route exact path={'/pages/:slug'} component={InfoPage}/>
                <Route component={() => 'Page not found'}/>
            </Switch>

            <Footer/>
        </Router>
    )
}

export default App