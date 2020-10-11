import React from 'react'
import { Button, Card, CardHeader, CardContent, CardActions, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import GoogleButton from 'react-google-button';
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginWithEmailPassword, startLoginWithGoogle } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm();
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email, password));
    }

    const handleLoginWithGoogle = (e) => {
        dispatch(startLoginWithGoogle());
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto m-5">
                    <Card elevation={5} style={{ borderRadius: 25 }}>
                        <CardHeader className="text-center" title="Login" style={{ backgroundColor: "#f5f5f5" }} />
                        <CardContent>
                            <form onSubmit={handleLogin}>
                                <div className="col-lg-12">
                                    <TextField id="email" type="email" onChange={handleInputChange} fullWidth={true} label="Email" name="email" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField id="password" type="password" onChange={handleInputChange} fullWidth={true} label="Clave" name="password" variant="outlined" />
                                </div>

                                <div className="container text-center">
                                    <div className="row">
                                        {loading && (
                                            <div className="col-md-12 mt-2">
                                                <CircularProgress />
                                            </div>
                                        )
                                        }
                                        <div className="col-md-12">
                                            <Button className="mt-3" variant="contained" color="primary" style={{ color: 'white' }} type="submit" disabled={loading}>
                                                Ingresar
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <GoogleButton
                                className="mt-3 mx-auto"
                                label="Continuar con Google"
                                onClick={handleLoginWithGoogle}
                            />


                        </CardContent>
                        <CardActions>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                        <Link to="/auth/recoverPassword" style={{ fontSize: '12px', textDecoration: 'none' }}>
                                            Olvidaste tu contraseña?
                                                </Link>
                                    </div>
                                    <div className=" col-md-6 text-right">
                                        <Link to="/auth/register" style={{ fontSize: '12px', textDecoration: 'none' }}>
                                            Regístrate
                            </Link>
                                    </div>
                                </div>
                            </div>

                            {/* <Button size="small" color="primary">
                                ¿Olvidaste tu contraseña?
                            </Button>
                            <Button size="small" color="primary">
                                Regístrate
                            </Button> */}
                        </CardActions>
                    </Card>
                </div>
            </div >
        </div >
    )
}
