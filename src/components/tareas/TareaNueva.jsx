import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { Button, DialogActions, Fab, Dialog, TextField, DialogTitle, DialogContent } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { createNewTask } from '../../actions/tareas';



export const TareaNueva = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formValues, HandleInputChange] = useForm()

    const { tarea, description } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description === undefined) {
            dispatch(createNewTask(tarea, ""));
        } else {
            dispatch(createNewTask(tarea, description));
        }
        handleClose();
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle className="text-center"> Tarea Nueva</DialogTitle>


                    <DialogContent>
                        <div className="mb-3">
                            <TextField id="outlined-basic" label="Actividad" name="tarea" onChange={HandleInputChange} variant="outlined" />
                        </div>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descripción Opcional"
                            name="description"
                            multiline
                            rows={5}
                            onChange={HandleInputChange}
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions className="center">
                        <Button size="small" type="submit">Agregar</Button>
                    </DialogActions>
                </form>

            </Dialog>
            <Fab color="secondary" aria-label="add" style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
                outline: 0
            }}
                onClick={handleOpen}>
                <AddIcon />
            </Fab>
        </>
    )
}