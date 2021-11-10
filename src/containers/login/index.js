import React from "react";
import ReactLogo from "../../../src/logo.svg"

import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div className=' flex justify-center items-center bg-gray-100 h-screen'>
                <div className="rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
                <img className="rounded-full h-32 filter saturate-150" src={ReactLogo} alt="user avatar" />
                <form method="post" className="mt-8 mb-4">
                    <div className="mb-4">
                        <label for="userEmail" className="sr-only">Email address</label>
                        <input className="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Email address" />
                    </div>
                    <div>
                        <label for="userEmail" className="sr-only">Password</label>
                        <input className="border-solid border border-gray-400 rounded px-2 py-3 mb-8" type="password" id="userPass" placeholder="Password" />
                    </div>
             
                    {/* IMPORTANT FROM REROUTING */}
                    <Link to="/dashboard">
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold w-full py-3 rounded-3xl " type="submit">
                            Sign in
                        </button>
                    </Link>


                </form>

                </div>
            </div>
        )
    }
}

export default Login;