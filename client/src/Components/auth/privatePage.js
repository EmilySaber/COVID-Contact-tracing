import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./authorize";

const PrivatePage = ({ component: RouteComponent, ...rest }) => {
      //give us the current use in authcontext
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/userlogin-page" />
        )
      }
    />
  );
};

export default PrivatePage;