import "./App.css";
import Signin from "./modules/auth/pages/Signin";
import Signup from "./modules/auth/pages/Signup";
import Dashboard from "./modules/Dashboard/pages/Dashboard";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store/store";
import { store } from "./Redux/store/store";

function App() {
  return (
    // <div className="App">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>

    // </div>
  );
}

export default App;

/* <Router>
<Routes  exact path= />
<Router />
</Router> */
