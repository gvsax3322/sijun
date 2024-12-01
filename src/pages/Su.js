import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// 음료수 배열
const drinks = [
  "유어스)하늘가득납작복숭아330ML",
  "유어스)하늘가득적포도330ML",
  "유어스)싱하망고탄산수350ML",
  "유어스)싱하레몬탄산수350ML",
  "유어스)마누카허니소다350ML",
  "유어스)지리산맑은샘물2L(4입)",
  "유어스)플레이버워터복숭아500",
  "유어스)플레이버워터청사과500",
  "유어스)평양냉면육수M",
  "유어스)지리산맑은샘물1.0L",
  "유어스)아이스티자몽허니블랙티",
  "유어스)아이스티유자민트티500ML",
  "유어스)에너지피치에이드L",
  "유어스)쿨라임에이드L",
  "유어스)동원보성녹차500ML",
  "유어스)수박과즙에이드L",
  "유어스)딸기과즙에이드L",
  "유어스)상주둥시곶감수정과L",
  "유어스)청포도에이드XL",
  "유어스)자두에이드M",
  "유어스)레몬에이드M",
  "유어스)복숭아에이드M",
  "유어스)헤이즐넛향커피M",
  "유어스)아메리카노블랙M",
  "유어스)아메리카노스위트M",
  "유어스)아이스쵸코M",
  "유어스)문경오미자에이드L",
  "유어스)납작복숭아아이스티XL",
  "유어스)납작복숭아아이스티L",
  "유어스)아메리카노스위트XL",
  "유어스)아메리카노스위트L",
  "유어스)아메리카노블랙XL",
  "유어스)아메리카노블랙L",
  "유어스)블루레몬에이드XL",
  "유어스)블루레몬에이드L",
  "유어스)헤이즐넛향커피XL",
  "유어스)헤이즐넛향커피L",
  "유어스)하늘가득한라봉330ML",
  "유어스(P)커피빈아메리카노400ML",
  "유어스)덴마크드링킹샤인머스캣",
  "유어스(P)할리스제주청귤그린티",
  "유어스(P)할리스복숭아얼그레이",
  "유어스(P)카멜마일드라떼450ML",
  "유어스(P)카멜아메리카노450ML",
  "유어스)덴마크드링킹복숭아500ML",
  "유어스)슈퍼히어로드링크120ML",
  "유어스)DMZ맑은샘물2L",
  "유어스)지리산맑은샘물2L",
  "코카콜라",
  "펩시콜라",
  "스프라이트",
  "칠성사이다",
  "환타 오렌지",
  "환타 포도",
  "닥터페퍼",
  "마운틴듀",
  "페리에",
  "산펠레그리노",
  "하늘보리 탄산수",
  "핫식스",
  "레드불",
  "몬스터 에너지",
  "락스타 에너지",
  "빡텐 에너지드링크",
  "슈퍼히어로 드링크",
  "비타500",
  "박카스D",
  "박카스F",
  "홍삼정 에브리타임",
  "헛개수",
  "컨디션헛개수",
  "컨디션환",
  "광동옥수수수염차",
  "광동비타민C",
  "포카리스웨트",
  "게토레이",
];

// 키프레임 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const splitAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 전체 높이를 사용 */
  flex-direction: column;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const DrinkDisplay = styled.div`
  margin-top: 30px;
  font-size: 2rem;
  color: #4caf50;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #4caf50;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  animation: ${spin} 1s linear infinite;
`;

const PriceSection = styled.div`
  margin-top: 40px;
  font-size: 1.5rem;
  color: #333;
`;

const PriceInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PriceButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

const PriceResult = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SplitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const SplitBar = styled.div`
  width: 50%;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const SplitFill = styled.div`
  height: 100%;
  background-color: #4caf50;
  border-radius: 15px;
  animation: ${splitAnimation} 2s ease forwards;
`;

const Su = () => {
  const [randomCombo, setRandomCombo] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  const [pricePerPerson, setPricePerPerson] = useState([0, 0]);

  const generateRandomCombo = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndexes = new Set();
      while (randomIndexes.size < 2) {
        randomIndexes.add(Math.floor(Math.random() * drinks.length));
      }

      const combo = [...randomIndexes].map(index => drinks[index]).join(" + ");
      setRandomCombo(combo);
      setLoading(false);
    }, 3000);
  };

  const calculatePriceSplit = () => {
    const total = parseFloat(totalPrice);
    if (!total || total <= 0) return;

    // 랜덤으로 두 사람의 금액을 나누기
    const firstPersonAmount = Math.random() * total;
    const secondPersonAmount = total - firstPersonAmount;

    // 백의자리 반올림 처리
    const roundedFirstPerson = Math.round(firstPersonAmount / 100) * 100;
    const roundedSecondPerson = Math.round(secondPersonAmount / 100) * 100;

    setPricePerPerson([roundedFirstPerson, roundedSecondPerson]);
  };

  return (
    <Container>
      <Title>랜덤 음료수 믹스</Title>
      <Button onClick={generateRandomCombo}>음료수 조합 뽑기</Button>
      {loading ? (
        <Loader />
      ) : (
        randomCombo && <DrinkDisplay>선택된 조합: {randomCombo}</DrinkDisplay>
      )}

      <PriceSection>
        <h2>금액 분배하기</h2>
        <PriceInput
          type="number"
          placeholder="총 금액"
          value={totalPrice}
          onChange={e => setTotalPrice(e.target.value)}
        />
        <PriceButton onClick={calculatePriceSplit}>분배하기</PriceButton>
      </PriceSection>

      {pricePerPerson[0] !== 0 && pricePerPerson[1] !== 0 && (
        <PriceResult>
          남시준: {pricePerPerson[0]}원, 백경국: {pricePerPerson[1]}원
        </PriceResult>
      )}
    </Container>
  );
};

export default Su;
