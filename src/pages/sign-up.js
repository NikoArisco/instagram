import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userNameExists = await doesUsernameExist(username);
    } catch (error) {}
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="Iphone with Instagram app"
        ></img>
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img
            src="./images/logo.png"
            alt="Instagram"
            className="mt-2 w-6/12 mb-4"
          ></img>
        </h1>
        {error && <p className="text-xs text-red-primary">{error}</p>}
        <form onSubmit={handleSignUp} method="POST">
          <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          ></input>
          <input
            aria-label="Enter your Full Name"
            type="text"
            placeholder="Full Name"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => setFullName(target.value)}
            value={fullName}
          ></input>
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          ></input>
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          ></input>
          <button
            disabled={isInvalid}
            type="submit"
            // className={
            //   'bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"}'
            // }
            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
              isInvalid ? "opacity-50" : ""
            }`}
          >
            Log In
          </button>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary mt-4">
            <p>
              Have have an account?{" "}
              <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
