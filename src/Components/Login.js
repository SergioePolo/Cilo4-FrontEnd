import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className="container mx-auto md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
          Login Ecommerce Service
        </h1>

        <form className="my-10 bg-white shadow-orange-500 rounded-lg p-10">
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
            />
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-3 p-3 border rounded-lg bg-gray-50"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-400 transition-colors"
          />
          <Link
            className="block text-center my-5 text-violet-600 uppercase text-sm"
            to="/Register"
          >
            Register
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
