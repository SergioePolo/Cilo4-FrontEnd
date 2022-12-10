import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const crearCuenta = async () => {
    //los dos password deben ser iguales
    if (password !== confirmar) {
      console.log("Son diferentes");
      const mensaje = "Las contraseñas son diferentes";
      swal({
        title: "Error",
        text: mensaje,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
      };
      console.log(data);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };
  return (
    <main className="container mx-auto md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
          Register Ecommerce Service
        </h1>

        <form
          onSubmit={onSubmit}
          className="my-10 bg-white shadow-orange-500 rounded-lg p-10"
        >
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Name
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Submit your name"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={nombre}
              onChange={onChange}
            />
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={email}
              onChange={onChange}
            />
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={password}
              onChange={onChange}
            />
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Confirmation
            </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Confirm Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
          />
          <Link
            className="block text-center my-5 text-violet-600 uppercase text-sm"
            to="/"
          >
            Return
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
