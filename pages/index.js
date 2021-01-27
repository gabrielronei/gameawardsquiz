import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const Form = styled.form`
    display: flex;
    flex-direction: column;
  > input {
    padding: .75rem .87rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }
  > button {
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    padding: .75rem .87rem;
    color: ${({ theme }) => theme.colors.defaultText};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      opacity: 0.8;
    };
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>VIDEOGAME AWARDS QUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Quiz sobre os últimos vencedores do videogame awards</p>
            <Form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${nome}`);
            }}
            >
              <input placeholder="Insira seu nome" onChange={(info) => setNome(info.target.value)} />
              <button type="submit" disabled={nome.length === 0 && nome.length < 2}>Jogar</button>
            </Form>
          </Widget.Content>
        </Widget>
        {/* <Widget>
          <Widget.Header>
            <h1>Video Game Awards QUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <p>asdjdaskljasdlasd</p>
          </Widget.Content>
        </Widget> */}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielronei" />
    </QuizBackground>
  );
}
