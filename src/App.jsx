import React, { Component } from 'react';
import Home from "./pages/home/Home.jsx";
import DetailTovar from "./pages/detail_tovar/DetailTovar.jsx";
import User from "./pages/user/User";
import Shopping from './pages/shop/Shopping'
import SnapshotFirebase from './pages/admin/SnapshotFirebase'
import SignUp from "./pages/signUp/SignUp";
import SignIn from './pages/signIn/SignIn';
import EditFirebase from "./pages/admin/components/EditFirebase";
import Search from "./pages/search/Search"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


class App extends Component {




  render() {
    return (
      <div>



        <Router>

          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>

                <li>
                  <Link to="/user">Информация пользователя</Link>
                </li>
                <li>
                  <Link to="/shopping">Корзина</Link>
                </li>
                <li>
                  <Link to="/add">add product</Link>
                </li>
                <li>
                  <Link to="/SignUp">Регистрация</Link>
                </li>
                <li>
                  <Link to="/SignIn">Авторизация</Link>
                </li>
              </ul>
            </nav>


            <Switch>


              <Route path="/user" element={<User />}>
                <User />
              </Route>
              <Route path="/shopping" element={<Shopping />}>
                <Shopping />
              </Route>
              <Route path="/add" element={<SnapshotFirebase />}>
                <SnapshotFirebase />
              </Route>
              <Route path="/SignUp" element={<SignUp />}>
                <SignUp />
              </Route>
              <Route path="/SignIn" element={<SignIn />}>
                <SignIn />
              </Route>
              <Route path="/product/:id" element={<DetailTovar />}>
                <DetailTovar />
              </Route>
              <Route path="/edit/:id" element={<EditFirebase />}>
                <EditFirebase />
              </Route>
              <Route path="/search" element={<Search />}>
                <Search />
              </Route>
              <Route path="/" element={<Home />}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}



export default App;
