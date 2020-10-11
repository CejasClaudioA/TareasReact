// import Swal from 'sweetalert2'
import { db } from "../firebase/firebaseConfig";
import { loadTask, loadTasks } from "../helpers/loadTasks";
import { types } from "../types/types";

export const createNewTask = (nombre, descripcion) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { tareas } = getState().tasks;
        const newTask = {
            nombre: nombre,
            descripcion: descripcion,
            date: new Date().getTime()
        }

        //await db.collection(`${uid}`).add(newTask);
        const nuevaTarea = await db.collection(`Users/${uid}/Lista de Tareas/`).add(newTask);
        const tareaNueva = await loadTask(uid, nuevaTarea.id, tareas);
        dispatch(setTareas(tareaNueva));
    }
}

export const startLoadingTareas = (uid) => {
    return async (dispatch) => {
        console.log("LoadTasks");
        const tareas = await loadTasks(uid);
        dispatch(setTareas(tareas));
    }
}

export const setTareas = (tareas) => ({
    type: types.getAllTask,
    payload: tareas
});

export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        await db.doc(`Users/${uid}/Lista de Tareas/${id}`).delete();
        dispatch(deleteTask(id));
    }
}

export const deleteTask = (id) => ({
    type: types.deleteTask,
    payload: id
})