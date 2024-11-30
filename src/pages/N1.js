import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  color: #4caf50;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  resize: vertical;
`;

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
  padding: 20px 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#45a049" : "#7e57c2")};
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #4caf50;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const ResultItem = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const IncorrectList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-size: 16px;
  color: #d32f2f;
`;

const N1 = () => {
  // 1교시, 2교시, 3교시 정답
  // 정답지
  //1교시
  const correctAnswers1 = [
    4, 3, 1, 2, 4, 4, 1, 5, 3, 1, 3, 2, 4, 4, 5, 3, 3, 5, 1, 3, 5, 5, 4, 5, 1,
    3, 5, 3, 1, 3, 1, 5, 4, 4, 3, 4, 2, 1, 4, 4, 2, 5, 2, 1, 5, 4, 2, 4, 4, 3,
    3, 4, 5, 4, 5, 5, 3, 4, 1, 4, 5, 2, 1, 3, 1, 3, 5, 4, 3, 5, 4, 1, 1, 4, 4,
    5, 4, 5, 2, 1, 3, 2, 3, 1, 2, 2, 2, 3, 3, 3, 1, 5, 2, 5, 3, 2, 2, 1, 4, 1,
    3, 3, 3, 5, 5, 1, 1, 3, 5, 2,
  ];

  //2교시
  const correctAnswers2 = [
    1, 2, 4, 2, 3, 1, 3, 4, 1, 1, 1, 4, 5, 3, 1, 5, 4, 4, 2, 1, 4, 2, 5, 5, 1,
    5, 2, 3, 4, 3, 5, 5, 2, 1, 4, 4, 4, 2, 1, 5, 4, 1, 1, 3, 2, 5, 2, 2, 5, 3,
    1, 1, 4, 3, 2, 5, 5, 2, 5, 3, 2, 4, 3, 1, 2, 5, 3, 4, 1, 2, 5, 4, 1, 1, 2,
    2, 4, 5, 3, 5, 2, 1, 4, 4, 4, 3, 5, 3, 5, 4,
  ];

  //3교시
  const correctAnswers3 = [
    4, 2, 1, 3, 5, 4, 3, 2, 5, 1, 4, 5, 4, 3, 4, 2, 5, 3, 5, 1, 5, 4, 5, 1, 5,
    4, 3, 2, 4, 5, 2, 2, 4, 1, 1, 3, 5, 1, 3, 4, 5, 3, 4, 5, 1, 2, 2, 3, 3, 1,
  ];

  const [selectedExam, setSelectedExam] = useState(1); // 교시 선택 상태
  const [userAnswers, setUserAnswers] = useState("");
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
    score: 0,
    incorrectQuestions: [],
  });

  // 선택된 교시에 맞는 정답 배열을 반환하는 함수
  const getCorrectAnswers = () => {
    if (selectedExam === 1) return correctAnswers1;
    if (selectedExam === 2) return correctAnswers2;
    if (selectedExam === 3) return correctAnswers3;
    return [];
  };

  // 채점 함수
  const gradeAnswers = () => {
    const correctAnswers = getCorrectAnswers();
    const userAnswersArray = userAnswers
      .replace(/\n/g, "") // 줄바꿈 제거
      .split("") // 각 문자를 개별 답안으로 분리
      .map(Number); // 숫자로 변환

    let correct = 0;
    let incorrectQuestions = [];

    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswersArray[i] === correctAnswers[i]) {
        correct++;
      } else {
        incorrectQuestions.push(i + 1); // 문제 번호는 1부터 시작
      }
    }

    const incorrect = correctAnswers.length - correct;
    const score = ((correct / correctAnswers.length) * 100).toFixed(2);

    setResult({ correct, incorrect, score, incorrectQuestions });
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/")}>뒤로</Button>
      <Title>남시준의 국가고시 채점1</Title>
      <div
        style={{ textAlign: "center", marginBottom: "20px", display: "flex" }}
      >
        <Button
          selected={selectedExam === 1}
          onClick={() => setSelectedExam(1)}
        >
          1교시
        </Button>
        <Button
          selected={selectedExam === 2}
          onClick={() => setSelectedExam(2)}
        >
          2교시
        </Button>
        <Button
          selected={selectedExam === 3}
          onClick={() => setSelectedExam(3)}
        >
          3교시
        </Button>
      </div>
      <TextArea
        placeholder="사용자의 답안을 입력하세요 (엔터로 구분)"
        value={userAnswers}
        onChange={e => setUserAnswers(e.target.value)}
      />
      <Button onClick={gradeAnswers}>채점하기</Button>
      <ResultContainer>
        <ResultItem>정답 수: {result.correct}</ResultItem>
        <ResultItem>오답 수: {result.incorrect}</ResultItem>
        <ResultItem>남시준의 점수: {result.score}%</ResultItem>
        {result.incorrectQuestions.length > 0 && (
          <>
            <ResultItem>오답인 문제 번호:</ResultItem>
            <IncorrectList>
              {result.incorrectQuestions.map(qNum => {
                const correctAnswer = getCorrectAnswers()[qNum - 1];
                return (
                  <li key={qNum}>
                    문제 {qNum} - 정답: {correctAnswer}
                  </li>
                );
              })}
            </IncorrectList>
          </>
        )}
      </ResultContainer>
    </Container>
  );
};

export default N1;
