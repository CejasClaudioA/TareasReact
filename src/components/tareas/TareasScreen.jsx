import React from 'react'
import { TareaNueva } from './TareaNueva';
import { Tarea } from './Tarea';
// import { useSelector } from 'react-redux';


export const TareasScreen = () => {

    // const state = useSelector(state => state.auth)



    return (
        <div className="container mb-3">
            <div className=" text-center">
                <h1>Tareas</h1>
            </div>
            <Tarea />
            <TareaNueva />
        </div >
        /*<div className="container mx-auto">
            <
            

            <TareaNueva />

        </div>*/
    )
}
