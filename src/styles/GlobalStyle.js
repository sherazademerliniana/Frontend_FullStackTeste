import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
     :root{
        --grey: #1F1300;
        --grey-3: #CC5803;
        --grey-2: #F7934C;
        --grey-1: #F7B05B;
        --grey-0:#FFC15E;
        --error:#1A181B;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizign: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button { 
        cursor: pointer;
    }

    body {
        background-color: #CC5803;
    }

`;

export const ContainerPages = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-3);
  padding: 1.5rem 0;
  border-radius: 0.3rem;
  @media (min-width: 400px) {
    max-width: 370px;
  }
  ${(props) => {
    switch (props.page) {
      case "home":
        return css`
          @media (min-width: 800px) {
            max-width: 780px;
          }
        `;
      default:
        return false;
    }
  }}
`;
