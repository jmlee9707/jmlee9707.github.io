import styled from '@emotion/styled';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '../styles/const';

export const Wrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  /* height: fit-content; */
  word-break: keep-all;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  padding: 120px 10px 60px 10px;
  width: 100%;
  height: 100%;
  max-width: ${contentMaxWidth};
  background-color: red;
`;
