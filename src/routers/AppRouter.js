import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase, storage } from '../firebase/firebaseConfig';
import { AuthRouter } from './AuthRouter';
import { TareasScreen } from '../components/tareas/TareasScreen';
import { login } from '../actions/auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Navbar } from '../components/navbar/Navbar';
import { Profile } from '../components/user/Profile';
import { Card, CardContent } from '@material-ui/core';
import { startLoadingTareas } from '../actions/tareas';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                let imgProfile;
                try {
                    imgProfile = await storage.ref().child(`${user.uid}/profile/`).getDownloadURL();
                } catch (err) {
                    imgProfile = '';
                }
                dispatch(login(user.uid, user.displayName, imgProfile));
                setIsLoggedIn(true);
                dispatch(startLoadingTareas(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <div className="container">
                <div className="row mx-auto m-5">
                    <div className="col-lg-3 mx-auto">
                        <Card>
                            <CardContent>
                                <div className="col-lg-12 text-center">
                                    Cargando, Espere...
                                </div>
                                <div className="col-lg-12 text-center">
                                    <CircularProgress />
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                </div>

            </div>
        )
    }

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} />
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter} />
                    <PrivateRoute isAuthenticated={isLoggedIn} exact path="/" component={TareasScreen} />
                    <PrivateRoute isAuthenticated={isLoggedIn} exact path="/ajustes" component={Profile} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
    )
}
