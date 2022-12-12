import { FormRegisterClient } from "../../components/FormRegisterClient";
import { ContainerPages } from "../../styles/GlobalStyle";
import { Title } from "../../styles/Typography";

export const RegisterClientPage = () => {
  return (
    <ContainerPages>
      <Title tag="h1" titleSize="title1">
        Register Client
      </Title>
      <FormRegisterClient />
    </ContainerPages>
  );
};
