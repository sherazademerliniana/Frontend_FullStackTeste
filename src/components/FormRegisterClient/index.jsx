import { StyledForm } from "../../styles/Form";
import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClientContext } from "../../providers/Clients";

export const FormRegisterClient = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
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

  const { postClient } = useContext(ClientContext);

  const onSubmit = async (data_client) => {
    data_client["contacts"] = [
      { email: data_client.email, telephone: data_client.telephone },
    ];
    delete data_client.email;
    delete data_client.telephone;

    postClient(data_client);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        hovercolor="var(--grey)"
      >
        Registrar Cliente
      </ButtonStyled>

      <ButtonStyled
        backgroundcolor="var(--grey-2)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey)"
        color="var(--grey)"
        hovercolor="var(--grey-2)"
        onClick={() => navigate("/home")}
      >
        Voltar
      </ButtonStyled>
    </StyledForm>
  );
};
