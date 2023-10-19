import { Navigate } from "react-router-dom";

function Redirect({ user }) {
  if (user.type === 0) {
    return <Navigate to={"/admins"} replace />;
  } else {
    return <Navigate to={"/teachers"} replace />;
  }
}

export default Redirect;
