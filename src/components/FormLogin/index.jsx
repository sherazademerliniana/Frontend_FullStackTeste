import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/style";
import { StyledForm } from "../../styles/Form";
import { ButtonStyled } from "../Button/style";
import { Title } from "../../styles/Typography";
import { useContext } from "react";
import { UserContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const { loginUser } = useContext(UserContext);
  const onSubmit = async (data_user) => {
    await loginUser(data_user);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        placeholder="Username"
        type="text"
        register={register}
        name="username"
        error={errors?.username?.message}
      />

      <Input
        label="Password"
        placeholder="Password"
        type="password"
        register={register}
        name="password"
        error={errors?.password?.message}
      />
      <ButtonStyled
        backgroundcolor="var(--grey)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey-2)"
        color="var(--grey-2)"
        hovercolor="var(--grey)"
      >
        Entrar
      </ButtonStyled>
      <Title tag="p" titleSize="headline" color="var(--grey)" padding=".1rem">
        Ainda não possui uma conta?
      </Title>
      <ButtonStyled
        backgroundcolor="var(--grey-2)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey)"
        color="var(--grey)"
        hovercolor="var(--grey-2)"
        onClick={() => navigate("/register")}
      >
        Cadastre-se
      </ButtonStyled>
    </StyledForm>
  );
};
