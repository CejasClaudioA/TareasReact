import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, blue } from '@material-ui/core/colors';
import { AppRouter } from './routers/AppRouter'

require('./tareasDelHogar.css');


export const TareasDelHogar = () => {

    const theme = createMuiTheme({
        palette: {
            primary: lightBlue,
            secondary: {
                main: blue[500],
            },
        },
    });

    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <AppRouter />
            </MuiThemeProvider>
        </Provider>
    )
}
