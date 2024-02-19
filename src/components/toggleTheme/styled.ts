import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '../../styles/const';

export const ToggleWrapper = styled.div<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  .theme-icon {
    width: 17px;
    height: 17px;
    path {
      fill: ${({ theme }) => theme.color.black};
    }
  }
`;
