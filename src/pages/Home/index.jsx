import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/style";
import { CardsClients } from "../../components/Cards";
import { UserContext } from "../../providers/Users";

import { Title } from "../../styles/Typography";
import { ContainerHome, ContainerUl, NamesDiv } from "./style";

export const HomePage = () => {
  const { user, exitUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <ContainerHome>
        <Title tag="h1" titleSize="title1">
          {user.full_name}
        </Title>
        <div>
          <ButtonStyled
            backgroundcolor="var(--grey)"
            width="30%"
            padding=".3rem"
            type="submit"
            hover="var(--grey-2)"
            color="var(--grey-2)"
            hovercolor="var(--grey)"
            onClick={() => navigate("/home/client")}
          >
            Cliente +
          </ButtonStyled>

          <ButtonStyled
            backgroundcolor="var(--grey-2)"
            width="30%"
            padding=".3rem"
            type="submit"
            hover="var(--grey)"
            color="var(--grey)"
            hovercolor="var(--grey-2)"
            onClick={() => exitUser()}
          >
            Sair
          </ButtonStyled>
        </div>
      </ContainerHome>

      <NamesDiv>
        <div>
          <Title tag="h2" titleSize="title2">
            Name
          </Title>
          <Title tag="h2" titleSize="title2">
            Email
          </Title>
          <Title tag="h2" titleSize="title2">
            Telephone
          </Title>
        </div>
      </NamesDiv>

      <ContainerUl>
        <CardsClients />
      </ContainerUl>
    </>
  );
};
