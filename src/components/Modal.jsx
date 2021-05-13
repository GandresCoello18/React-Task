import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const ModalElement = ({ open, setOpen, children }) => {
    return (
      <>
        <Modal show={open} onHide={() => setOpen(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }