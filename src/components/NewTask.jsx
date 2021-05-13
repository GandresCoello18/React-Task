import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const NewTask = () => {
    const [Task, setTask] = useState('')

    const createTask = () => {
        console.log(Task)
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nueva tarea</Form.Label>
                <Form.Control type="text" placeholder="Escribe tu nueva tarea" onChange={event => setTask(event.target.value)} />
            </Form.Group>

            <Button variant="primary" block onClick={createTask}>
                Crear
            </Button>
        </Form>
    )
}