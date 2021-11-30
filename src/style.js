import styled from 'styled-components';

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export const AppLoading = styled.div`
  background-color: #ffff;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

export const AppLoadingContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 250px;
  }
`;
