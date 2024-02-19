import styled from '@emotion/styled';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '../styles/const';

export const Wrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  word-break: keep-all;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  font-family: GmarketSansMedium;

`;

export const Content = styled.div`
  padding: 120px 10px 60px 10px;
  width: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${contentMaxWidth};
  min-height : 100vh;
`;
