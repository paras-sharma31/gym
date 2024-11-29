import React from "react";
import UseAuth from "../../hooks/useAuth";

const Login = () => {
  const { input, handleChange, handleSubmit, inputRef } = UseAuth()

  return (
    <div className="w-screen flex">
      <div className="w-[50%]">
        <form className="login-form" onSubmit={handleSubmit} >
          <div className="flex flex-col gap-5 p-10 ">
            <h2 className="text-center text-[45px] font-semibold">
              Login
            </h2>
            <label>Email</label>
            <input
              type="email"
              name="email"
              ref={inputRef}
              value={input.email}
              onChange={handleChange}
              className="text-black py-3 rounded-lg"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="text-black py-3 rounded-lg "
            />
            <button type="submit" className="border px-5 py-2 bg-yellow-500">
              Login
            </button>
            <a href="#" className="login-forgot-pass">
              forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="w-[50%] ">
        <img src={'/images/login1.gif'} alt="" className="w-[100%] object-cover" />
      </div>
    </div >
  );
};

export default Login;
