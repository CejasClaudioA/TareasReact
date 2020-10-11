import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { storage } from "../../firebase/firebaseConfig";
import { Button, Card, CardContent, CardHeader, TextField } from '@material-ui/core'
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';

export const Profile = () => {

    const { uid, photoURL } = useSelector(state => state.auth);
    const [img, setImg] = useState();
    const [imagen, setImagen] = useState();

    useEffect(() => {
        setImg(photoURL);
        console.log("algo");
    }, [photoURL])


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues

    const onChange = e => {
        setImg(URL.createObjectURL(e.target.files[0]));
        setImagen(e.target.files[0])
    }

    const UpdateInfo = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Estás seguro?',
            text: "Estás apunto de modificar tus datos.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const storageRef = storage.ref().child(`${uid}/profile/`);
                storageRef.put(imagen);
                Swal.fire('Bien!!', 'Tus cambios se han guardado.', 'success')
            }
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <Card className="mt-5">
                        <CardHeader className="text-center" title="Datos Personales" style={{ backgroundColor: "#f5f5f5" }} />
                        <CardContent>

                            <form onSubmit={UpdateInfo}>
                                <div className="text-center">
                                    <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" type="file" onChange={onChange} />
                                    <label htmlFor="raised-button-file">
                                        <Button component="span" style={{ outline: 0, borderRadius: 150 }}>
                                            {/* <img src="/logo192.png" className="rounded" alt="nose" style={{ backgroundColor: "black" }} /> */}
                                            {img ? (
                                                <img src={img} height="192" width="192" className="rounded" alt="nose" style={{ backgroundColor: "black", border: 0 }} />
                                            ) :
                                                (
                                                    <img src='/user.png' className="rounded" alt="nose" style={{ height: 170, width: "auto", border: 0 }} />
                                                )

                                            }
                                        </Button>
                                    </label>
                                </div>

                                <div className="col-lg-12 mt-3">
                                    <TextField value={name} id="name" type="text" onChange={handleInputChange} fullWidth={true} label="Nombre" name="name" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField value={email} id="email" type="email" onChange={handleInputChange} fullWidth={true} label="Email" name="email" variant="outlined" />
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <TextField value={password} id="password" type="password" onChange={handleInputChange} fullWidth={true} label="Clave" name="password" variant="outlined" />
                                </div>
                                <div className="text-center">
                                    <div className="row">
                                        {/* {loading && (
                                            <div className="col-md-12 mt-2">
                                                <CircularProgress />
                                            </div>
                                        )
                                        } */}
                                        <div className="col-md-12">
                                            <Button className="mt-3" type="submit" variant="contained" color="primary" style={{ color: 'white' }}>
                                                Confirmar Cambios
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
