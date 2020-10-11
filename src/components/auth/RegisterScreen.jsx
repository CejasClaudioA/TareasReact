import React from 'react';
import { Button, Card, CardHeader, CardContent, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveError, setError } from '../../actions/uiRegister';
import { startRegisterWithEmailPassword } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { loading, msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Nombre es requerido."))
            return false;
        } else if (!validator.isEmail(email) || email.trim().length === 0) {
            dispatch(setError("Se requiere un email valido."))
            return false;
        } else if (password <= 4) {
            dispatch(setError("La contraseña debe ser de al menos 6 caracteres."))
            return false;
        } else if (password !== password2) {
            dispatch(setError("Las contraseñas no coinciden"))
            return false;

        }
        dispatch(RemoveError());
        return true;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto m-5">


                    <Card elevation={5}>
                        <CardHeader className="text-center" title="Registro" style={{ backgroundColor: "#f5f5f5" }} />
                        <CardContent>

                            {msgError && (
                                <Alert className="mb-3" variant="filled" severity="error">
                                    {msgError}
                                </Alert>)}

                            <form onSubmit={handleRegister}>
                                <div className="col-lg-12">
                                    <TextField id="name" type="text" onChange={handleInputChange} fullWidth={true} label="Nombre" name="name" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField id="email" type="email" onChange={handleInputChange} fullWidth={true} label="Email" name="email" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField id="password" type="password" onChange={handleInputChange} fullWidth={true} label="Clave" name="password" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField id="password2" type="password" onChange={handleInputChange} fullWidth={true} label="Confirmar Clave" name="password2" variant="outlined" />
                                </div>
                                <div className="text-center">
                                    <div className="row">
                                        {loading && (
                                            <div className="col-md-12 mt-2">
                                                <CircularProgress />
                                            </div>
                                        )
                                        }
                                        <div className="col-md-12">
                                            <Button className="mt-3" type="submit" variant="contained" color="primary" style={{ color: 'white' }}>
                                                Registrarse
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>







                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    )
}
