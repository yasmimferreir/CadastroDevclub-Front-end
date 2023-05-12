import styled from "styled-components";
import Background from "../../img/bgimage.jpg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  background: url("${Background}");
  background-size: cover;
  height: 100vh;
`;

export const Image = styled.img`
  margin: 9rem 0 0 6rem;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px 20px;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
`;

export const H1 = styled.h1`
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
`;

export const InputLabel = styled.p`
  position: relative;
  right: 150px;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #3e0190;
  outline: 0;
  background-color: transparent;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  margin-top: 130px;
  border: none;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;
