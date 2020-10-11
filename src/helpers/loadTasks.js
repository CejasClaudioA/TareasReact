import { db } from '../firebase/firebaseConfig';

export const loadTasks = async (uid) => {

    console.log("consulta a la bdd");
    const tareasSnap = await db.collection(`Users/${uid}/Lista de Tareas/`).get();
    const tareas = [];

    tareasSnap.forEach(querySnapshot => {
        tareas.push({
            id: querySnapshot.id,
            ...querySnapshot.data()
        })
    });

    return tareas;
}

export const loadTask = async (uid, id, listaTareas) => {
    const tarea = await db.doc(`Users/${uid}/Lista de Tareas/${id}`).get();

    listaTareas.push({
        id: tarea.id,
        ...tarea.data()
    });

    return listaTareas;
}