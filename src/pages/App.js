import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import './App.scss'
import Routes from "../routes/routes";
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
