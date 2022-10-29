import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10% auto;
`;

export const HomeButtonStyled = styled.button`
  background-image: linear-gradient(90deg, #b9c788, #6e7849);
  border-radius: 25px;
  border: 2px solid #4a5032;
  box-shadow: #6e7849 0px 0px 10px;
  color: #ffffff;
  display: inline-block;
  font-size: 4em;
  margin: auto;
  padding: 15px;
  text-decoration: none;
  text-shadow: #000000 5px 5px 15px;

  cursor: pointer;
  :hover {
    background-image: linear-gradient(150deg, #b9c788, #6e7849);
  }

  :active {
    background-image: linear-gradient(90deg, #b9c788, #6e7849);
  }
`;
