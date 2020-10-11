import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardHeader, CardContent, CardActionArea, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import { startDeleting } from '../../actions/tareas';

export const Tarea = () => {
    const dispatch = useDispatch();
    const { tareas } = useSelector(state => state.tasks)
    const [open, setOpen] = useState(false);
    const [HandleInputChange] = useForm()
    const [task, setTask] = useState({
        id: '',
        nombre: '',
        descripcion: ''
    });

    const { id, nombre, descripcion } = task;

    const handleOpen = (task) => {
        setOpen(true);
        setTask(task);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado! ", id, " ", nombre, " y ", descripcion);
        handleClose();
    }

    const Borrar = (e) => {
        e.preventDefault();
        dispatch(startDeleting(id))
        handleClose();
    }


    return (
        <div className="row">

            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <form onSubmit={handleSubmit}>
                    <DialogTitle className="text-center"> Tarea</DialogTitle>


                    <DialogContent>
                        <div className="mb-3">
                            <TextField id="outlined-basic" label="Actividad" name="tarea" value={task.nombre} onChange={HandleInputChange} variant="outlined" />
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción Opcional"
                            name="description"
                            value={task.descripcion}
                            multiline
                            rows={5}
                            onChange={HandleInputChange}
                            variant="outlined"
                        />
                    </DialogContent>
                    <div className="container">
                        <div className="row">

                            <DialogActions className="center">
                                <Button size="small" type="submit">Actualizar</Button>
                            </DialogActions>
                            <DialogActions className="center">
                                <Button size="small" onClick={Borrar}>Borrar</Button>
                            </DialogActions>
                        </div>
                    </div>
                </form>
            </Dialog>


            {tareas.map(tarea =>
                <div className="col-lg-3 col-md-4 mt-5" key={tarea.id}>

                    <Card elevation={5} style={{ borderRadius: 25 }} >
                        <CardActionArea style={{ outline: 0 }} onClick={() => handleOpen(tarea)}>
                            <CardHeader className="text-center" title={tarea.nombre} style={{ backgroundColor: "#f5f5f5" }} />
                            <CardContent>
                                {tarea.descripcion}
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>


            )}

        </div>
    )
}
