import { createContext } from "react";
import { api } from "../../services/Api";

export const contactContext = createContext();

export const ContactProvider = ({ children }) => {
  const postContacts = (contact_data) => {
    api
      .post("/clients", contact_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const deleteContact = (contact_id) => {
    api
      .delete(`/clients/${contact_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <contactContext.Provider value={{ postContacts, deleteContact }}>
      {children}
    </contactContext.Provider>
  );
};
