import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/joystick.ico" />
        <title>Game Awards Quiz</title>
        <meta name="title" content="Game Awards Quiz" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://gameawardsquiz.vercel.app/"
        />
        <meta property="og:title" content="Game Awards Quiz" />

        <meta
          property="og:image"
          content={db.bg}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
