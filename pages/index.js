import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

const Form = styled.form`
    display: flex;
    flex-direction: column;
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
              <Input placeholder="Insira seu nome" name="nomeDoUsuario" onChange={(info) => setNome(info.target.value)} />
              <Button type="submit" disabled={nome.length === 0 && nome.length < 2}>Jogar</Button>
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
