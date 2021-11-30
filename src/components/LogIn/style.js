import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const InnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    height: 50px;
    object-fit: contain;
    margin-bottom: 40px;
  }

  > h1 {
    font-family: 'Open Sans', sans-serif;
  }

  > button {
    margin-top: 30px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: #ffff;

    :hover {
      background-color: #45966d;
    }
  }
`;
