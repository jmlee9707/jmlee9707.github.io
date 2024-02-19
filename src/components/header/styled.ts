import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from '../../styles/const';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white}; // 수정 예정
  width: 100%;
  z-index: 100;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  max-width: ${contentMaxWidth};
`;

export const InfoSection = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  font-size: 12px;
  line-height: 16px;
  gap: 16px;
  color: ${({ theme }) => theme.color.black};

  div:first-child {
    margin-right: auto;
  }
`;

export const CopyBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

  .icon-link {
    width: 16px;
    height: 16px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 16px;
`;
export const Title = styled(Link)`
  color: ${({ theme }) => theme.color.black};
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MenuLink = styled(Link)<{ $seleted: string }>`
  color: ${({ theme }) => theme.color.black};

  &:hover {
    opacity: 0.8;
  }
`;

export const ToggleWrapper = styled.div``;
