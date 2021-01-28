import React from 'react';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function QuestionWidget({ question, total, questionIndex }) {
  const questionId = `question___${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {` Pergunta ${questionIndex + 1} de ${total}`}
        </h3>
      </Widget.Header>
      <img alt="Descrição" style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative____${alternativeIndex}`;
            return (
              <Widget.Topic htmlFor={alternativeId} as="label">
                <input id={alternative} name={questionId} type="radio" />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button style={{ width: '100%' }}>Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  const total = db.questions.length;
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuestionWidget question={question} total={total} questionIndex={questionIndex} />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielronei" />
    </QuizBackground>
  );
}
