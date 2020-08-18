import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--blueTheme);
    flex: 1;
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
    min-height: 100vh;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
