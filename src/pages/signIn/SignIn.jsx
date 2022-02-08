import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SignInService from "./service/service";
import { setUser } from "../../redux/infoUser";


const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  async function User(e) {
    e.preventDefault();
    dispatch(setUser(await SignInService.getSignIn(mail, pass)))
  }

  return (
    <div className="container">

      <h5>Авторизация</h5>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={mail} onChange={(e) => setMail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        <div>
          <button onClick={(e) => User(e)}>Войти</button>
        </div>
      </form>
    </div>
  )
}


export default SignIn
