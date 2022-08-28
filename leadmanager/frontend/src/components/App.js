import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import Alert from "./layouts/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoutes from "./common/PrivateRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <ToastContainer position="top-center" />
        <HashRouter>
          <Fragment>
            <Alert />
            <Header />
            <div className="container">
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/" exact element={<Dashboard />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
