import React, {useContext} from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";


export default function Auth() {
  const {  setUsername, setSecret } = useContext(Context);
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-title">NextJS Chast</div>
          <div className="input-container">
            <input
              placeholder="Enter Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">Login / Signup</button>
        </form>
      </div>
    </div>
  );
}
