import { useState } from "react";
import "./styles.css";
import { useForm } from "./useForm";

export default function App() {
  const [state, input, submit] = useForm();

  return (
    <div>
      <form onSubmit={submit} className="form">
        <label for="email">Email</label>
        <input
          value={state.email}
          onChange={input}
          placeholder="Enter Email"
          name="email"
          type="email"
        />
        <label for="password">Password</label>
        <input
          value={state.password}
          onChange={input}
          placeholder="Enter Password"
          name="password"
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}
