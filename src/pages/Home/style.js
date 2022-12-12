import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;

  div {
    width: 35%;
    display: flex;
    gap: 1.3rem;
    justify-content: flex-end;
  }
`;

export const ContainerUl = styled.ul`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5px;
  gap: 10px;
  li {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    background-color: var(--grey-2);
    border-radius: 5px;
    padding: 0.4rem 0.8rem;
  }
`;

export const NamesDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5px;

  div {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
