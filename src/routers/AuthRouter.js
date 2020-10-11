import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RecuperarPasswordScreen } from '../components/auth/RecuperarPasswordScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" component={LoginScreen} />
                <Route path="/auth/register" component={RegisterScreen} />
                <Route path="/auth/recoverPassword" component={RecuperarPasswordScreen} />

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
