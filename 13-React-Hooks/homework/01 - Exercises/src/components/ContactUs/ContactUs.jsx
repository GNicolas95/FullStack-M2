import React from "react";
import {useDispatch} from "react-redux";
import {enviarForm} from "../../redux/actions/actions";

const ContactUs = () => {

  const dispatch = useDispatch();

  const [form, setForm] =  React.useState({
    nombre:  "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = () => {
    dispatch(enviarForm(form));
    setForm({})
  }

  const handleInput = (event) => {
    setForm ({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <form className="contactBg" >
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleInput}/>
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleInput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleInput}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleInput}/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default ContactUs;
