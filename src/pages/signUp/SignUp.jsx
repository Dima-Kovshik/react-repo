import React, { useState } from "react";
import SignUpService from "./service/service";

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");

  return (
    <div className="container">
      <h5>Регистрация</h5>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="firstName">Имя</label>
        <input type="text" id='firstName' value={first_name} onChange={(e) => setFirst(e.target.value)} />
      </div>
      <div>
        <label htmlFor="lastName">Фамилия</label>
        <input type="text" id='lastName' value={last_name} onChange={(e) => setLast(e.target.value)} />
      </div>
      <div>
        <button onClick={() => SignUpService.getSignUp(email, password, first_name, last_name)}>Зарегистрироваться</button>
      </div>
    </div >
  )
}
export default SignUp
