import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CssBaseline from "material-ui/CssBaseline";

import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("app")
);
