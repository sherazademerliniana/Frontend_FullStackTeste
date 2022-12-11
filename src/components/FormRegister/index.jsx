import { StyledForm } from "../../styles/Form";
import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";
import { useContext } from "react";
import { UserContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().required("Password required"),
    full_name: yup.string().required("Enter your name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter your valid email"),
    telephone: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const { postUser } = useContext(UserContext);
  const onSubmit = async (data_user) => {
    data_user["contacts"] = [
      { email: data_user.email, telephone: data_user.telephone },
    ];
    delete data_user.email;
    delete data_user.telephone;
    postUser(data_user);
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
      <Input
        label="Full Name"
        placeholder="Maria da Silva"
        type="text"
        register={register}
        name="full_name"
        error={errors?.full_name?.message}
      />

      <Input
        label="Email"
        placeholder="Maria@hotmail.com"
        type="text"
        register={register}
        name="email"
        error={errors?.email?.message}
      />

      <Input
        label="Telephone"
        placeholder="991111111"
        type="text"
        register={register}
        name="telephone"
        error={errors?.telephone?.message}
      />
      <ButtonStyled
        backgroundcolor="var(--grey)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey-2)"
        color="var(--grey-2)"
      >
        Registrar
      </ButtonStyled>

      <ButtonStyled
        backgroundcolor="var(--grey-2)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey)"
        color="var(--grey)"
        onClick={() => navigate("/login")}
      >
        Voltar
      </ButtonStyled>
    </StyledForm>
  );
};
