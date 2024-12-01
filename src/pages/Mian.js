import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url("assets/images/a1.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 24px;
  gap: 100px;
`;

// 버튼 스타일
const Button = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${({ selected }) => (selected ? "#45a049" : "#673ab7")};
  background-image: url("assets/images/as1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  font-size: 18px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#45a049" : "#7e57c2")};
  }
`;
const Axxx = styled.div`
  display: flex;
  gap: 100px;
`;
const Mian = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackgroundContainer>
        <div>
          <Button onClick={() => navigate("/su")}>음류수</Button>
        </div>
        <Axxx>
          <Button onClick={() => navigate("/n1")}>1</Button>
          <Button onClick={() => navigate("/n2")}>2</Button>
          <Button onClick={() => navigate("/n3")}>3</Button>
        </Axxx>
      </BackgroundContainer>
    </>
  );
};

export default Mian;
