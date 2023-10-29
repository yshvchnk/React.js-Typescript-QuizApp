/* eslint-disable react/no-danger */
import React from 'react';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

// eslint-disable-next-line react/function-component-definition
export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    {answers.map((answer) => (
      <ButtonWrapper
        key={answer}
        correct={userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
      >
        <button
          type="button"
          disabled={!!userAnswer}
          value={answer}
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      </ButtonWrapper>
    ))}
  </Wrapper>
);

export default QuestionCard;
