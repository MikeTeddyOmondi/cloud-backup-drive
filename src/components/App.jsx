import React from "react";
import Signup from "./authentication/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute />}> */}
          {/* <Route element={<PrivateRoute />}> */}

          {/* Drive */}
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/folder/:folderId' element={<Dashboard />} />
          {/* <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/folder/:folderId' component={Dashboard} /> */}

          {/* Profile */}
          <Route path='/user' element={<Profile />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          {/* <PrivateRoute path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} /> */}
          {/* </Route> */}
          {/* </Route> */}

          {/* Auth */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
