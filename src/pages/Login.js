import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

function Login() {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value) {
      setUser({ userId: parseInt(e.target.value) });
    }
  };

  const handleSubmit = () => {
    console.log(user);
    if (Number.isInteger(user.userId)) {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <p className="text-4xl font-bold mb-10">Welcome to Shopaholics!</p>
      <div className="w-full max-w-lg bg-white rounded">
        <form className="flex flex-col justify-center items-center pt-8 pb-8 px-8 shadow-md">
          <p className="text-lg mb-6">Please key in your user id to login</p>
          <input
            className="focus:shadow-outline w-full max-w-sm appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="User id e.g. 1"
            onChange={handleChange}
          />
          <button
            className=" mt-8 focus:shadow-outline mb-2 w-1/2 self-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
