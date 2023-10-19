import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useCallback, useEffect, useState } from "react";
import { getUser } from "./@services/AuthService";
import LinearProgress from "@mui/material/LinearProgress";
import Home from "./@pages/Home";
import SignIn from "./@pages/SignIn";
import userContext from "./@contexts/user-context";
import { removeToken } from "./@helpers/token";

function App() {
  const [user, setUser] = useState({ loading: true, value: null });

  useEffect(() => {
    const controller = new AbortController();

    getUser({ signal: controller.signal }).then(
      (data) => {
        setUser({ loading: false, value: data.payload });
      },
      (err) => {
        setUser({ loading: false, value: null });
      }
    );

    return () => {
      // abort request

      controller.abort();
    };
  }, []);

  const HandleLogIn = useCallback((user) => {
    setUser((prev) => ({ ...prev, value: user }));
  }, []);

  const HandleLogOut = useCallback(() => {
    removeToken();
    setUser((user) => ({ ...user, value: null }));
  }, []);

  return (
    <div className="App-container">
      {user.loading ? (
        <LinearProgress />
      ) : user.value != null ? (
        <userContext.Provider value={user.value}>
          <Home logOut={HandleLogOut} />
        </userContext.Provider>
      ) : (
        <SignIn setUser={HandleLogIn} />
      )}
    </div>
  );
}

export default App;
