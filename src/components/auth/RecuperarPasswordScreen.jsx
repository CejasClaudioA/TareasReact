import React from 'react';
import Swal from 'sweetalert2';
import { Button, Card, CardHeader, CardContent, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import { firebase } from '../../firebase/firebaseConfig';

export const RecuperarPasswordScreen = () => {

    const { loading } = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm();

    const { email } = formValues;

    const handleRecover = (e) => {
        e.preventDefault();
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            Swal.fire('Bien!', "Revisa tu casilla de correo", "success");
        }).catch((err) => {
            Swal.fire('Atención!', "Ese email no se encuentra registrado.", "warning");
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto m-5">
                    <Card elevation={5} style={{ borderRadius: 25 }}>
                        <CardHeader className="text-center" title="Recuperación de Clave" style={{ backgroundColor: "#f5f5f5" }} />
                        <CardContent>
                            <form onSubmit={handleRecover}>
                                <div className="col-lg-12">
                                    <TextField id="email" type="email" onChange={handleInputChange} fullWidth={true} label="Email" name="email" variant="outlined" />
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
                                                Recuperar
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
