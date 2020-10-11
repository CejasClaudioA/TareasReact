import { types } from "../types/types";

const initialState = {
    tareas: []
}

export const tareasReducer = (state = initialState, action) => {

    switch (action.type) {
        // case types.addTask:
        //     return {
        //         id: action.payload.id,
        //         nameTask: action.payload.nameTask,
        //     }
        case types.getAllTask:
            return {
                ...state,
                tareas: [...action.payload]
            }
        case types.deleteTask:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        default:
            return state;
    }

}