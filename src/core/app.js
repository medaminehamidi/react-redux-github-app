import React from 'react'
import Home from '../components/home/home'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../store/config/configerStore';
import { CssBaseline } from '@material-ui/core';


const store = configureStore();
const App = () => {
    return (
        <ReduxProvider store={store}>
            <CssBaseline />
            <Home />
        </ReduxProvider>
    )
}
export default App;