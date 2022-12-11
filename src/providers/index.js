import { UserProvider } from "./Users";
import { ContactProvider } from "./Clients";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ContactProvider>{children}</ContactProvider>
    </UserProvider>
  );
};
