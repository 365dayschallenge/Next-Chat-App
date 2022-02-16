import React, {useContext} from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";


export default function Auth() {
  return <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="auth-title">NextJS Chast</div>
        <div className="input-container">
          <input placeholder="Enter Email" className="text-input" onChange={(e) => e.setUsername(e.target.value)}/>
        </div>
      </form>
    </div>
  </div>;
}
