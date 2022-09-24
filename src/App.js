import "./App.css";
import Signin from "./modules/auth/pages/Signin";
import Signup from "./modules/auth/pages/Signup";
import Dashboard from "./modules/Dashboard/pages/Dashboard";
import Router from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store/store";
import { store } from "./Redux/store/store";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import SignUp from "./modules/auth/pages/Signup";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Navigate } from "react-router";

function App() {
  // const user = useSelector((state) => state?.user?.user);
  return (
    // <div className="App">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <BrowserRouter>
          <Router />
        </BrowserRouter> */}
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />
            <Route exact path="*" element={<>error</>} />
            <Route
              exact
              path="/signin"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>

    // </div>
  );
}

export default App;

export const TetsRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exac
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          exac
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          exac
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
