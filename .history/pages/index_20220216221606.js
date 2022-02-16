import React, {useContext} from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";


export default function Auth() {
    const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter()
  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;

    axios.put('https://api.chatengine.io/users',{username,secret},{headers: {"Private-key": '  a4611bf6 - f838 - 4919 - 9045 - 9f26525834c0'}}
    ).then(r => router.push('/chats'))
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
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
