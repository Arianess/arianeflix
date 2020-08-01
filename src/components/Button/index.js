import styled from 'styled-components';

const Button = styled.button`
  color: var(--blueTheme);
  border: 1px solid var(--blueTheme);
  background: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
  opacity: .5;
  }

  @media(max-width: 800px) {
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    border: 0;
    border-radius: 0;
    position: fixed;
    background-color: var(--blueTheme);
    color: var(--black);
  }
`;

export default Button;
