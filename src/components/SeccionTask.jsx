import React from 'react'

export const SeccionTask = () => {
    return (
        <div className="flex p-2 seccionTask">
            <input type='checkbox' className="p-1" />
            <span className="P-1 ml-2">Aqui va mi tarea</span>
            <span className="text-danger p-1 ml-2 float-right">Eliminar</span>
        </div>
    )
}