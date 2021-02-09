import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {store} from "./redux/store";


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
)

