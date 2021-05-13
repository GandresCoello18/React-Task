import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SeccionTask } from './components/SeccionTask'
import { Alert } from 'react-bootstrap';
import { ModalElement } from './components/Modal'
import { NewTask } from './components/NewTask'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="container">
        <h3 className="text-center p-2">Lista de tareas</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <input placeholder='Buscar tarea' className="form-control" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          {[1,2 ,3 ,4 ,5].map(item => (
            <div className="col-12 col-md-7 mb-3" key={item}>
              <SeccionTask />
            </div>
          ))}
          <div className="col-12 col-md-7">
            <Alert variant='danger'>
              No hay tareas disponibles
            </Alert>
          </div>
        </div>

        <h3 className="p-2">Completados</h3>
        <div className="row justify-content-center mt-4">
          {[1,2].map(item => (
            <div className="col-12 col-md-7 mb-3" key={item}>
              <SeccionTask />
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-5">
            <button className="btn btn-info form-control" onClick={() => setVisible(true)}>Nueva tarea</button>
          </div>
        </div>

        <ModalElement open={visible} setOpen={setVisible}>
          <NewTask />
        </ModalElement>
      </div>
    </>
  );
}

export default App;
