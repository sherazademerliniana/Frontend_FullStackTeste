import { createContext, useState } from "react";
import { api } from "../../services/Api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@userData")) || ""
  );
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userToken")) || ""
  );

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const loginUser = (user_data) => {
    api
      .post("/login", user_data)
      .then((res) => {
        console.log(res);
        setUserToken(res.data.token);
        localStorage.setItem("@userToken", JSON.stringify(res.data.token));
        getUser(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = () => {
    api
      .get("/users", config)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@userData", JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const postUser = (client_data) => {
    console.log(client_data);
    api
      .post("/users", client_data)
      .then((res) => {
        console.log(res);
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (client_id) => {
    api
      .delete(`/users/${client_id}`)
      .then((res) => {
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const exitUser = () => {
    setUserToken("");
    localStorage.removeItem("@userToken");
  };

  return (
    <UserContext.Provider
      value={{ user, getUser, postUser, deleteUser, loginUser, exitUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
