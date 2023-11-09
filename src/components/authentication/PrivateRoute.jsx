import React from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to='/login' />
//         );
//       }}
//     ></Route>
//   );
// }


export default function PrivateRoute({ path, component: Component, ...rest }) {
  const { currentUser } = useAuth();
  // const navigate = useNavigate();

  return (
    <Route
      {...rest}
      path={path}
      element={
        currentUser ? (
          component
        ) : (
          <Navigate to='/login' replace state={{ from: path }} />
        )
      }
    />
  );
}
