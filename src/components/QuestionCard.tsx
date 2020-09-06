import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestion: number;
};

// create functional component using React.FC
const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNum,
  totalQuestion,
}) => (
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestion}
    </p>
    {/* to inject something */}
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answer.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
