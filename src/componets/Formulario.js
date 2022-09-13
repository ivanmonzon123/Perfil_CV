import React from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../styles/Formulario.css";
const Formulario = () => {
  return (
    <div className="row justify-content-center text-center p-5 w-100">
      <h2 className="col-12 text-black titulo-formulario">Contactanos Ahora</h2>

      <div className="name-and-email row justify-content-between">
      <Form.Control
        placeholder="Nombre Completo"
        className="mb-3 campos-responsive"
        aria-label="Large"
      />
      <Form.Control
        placeholder="Direccion de email"
        className="mb-3 campos-responsive"
        aria-label="Large"
      />
      </div>
      <Form.Control
        className="mb-3"
        placeholder="Tema"
        aria-label="Large"
      />
      <Form.Control
        className="mb-3"
        placeholder="Porfavor escribe tu mensaje..."
        as="textarea"
        aria-label="With textarea"
      />

      <button className="buton-form" variant="outline-primary">
        Primary
      </button>
    </div>
  );
};

export default Formulario;
