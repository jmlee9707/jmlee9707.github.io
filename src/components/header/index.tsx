import * as S from './styled';
import React from 'react';
import { Link1Icon } from '@radix-ui/react-icons';
import ToggleTheme from '../toggleTheme';

type HeaderProps = {
  title: string;
  location?: Location;
};

const Menus = [
  {
    name: 'about',
    path: '/about',
  },

  {
    name: 'posts',
    path: '/posts',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  //   {
  //     name: "comments",
  //     path: "/comments",
  //   },
];

const Header: React.FC<HeaderProps> = ({ title}) => {
  // const pathname = location;

  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <S.InfoSection>
          <div>last updated : </div>
          <S.CopyBtn>
            <Link1Icon className="icon-link" />
            <span>URL 복사</span>
          </S.CopyBtn>
          <ToggleTheme />
        </S.InfoSection>
        <S.TitleSection>
          <S.Title to="/">{title}</S.Title>
          <S.MenuList>
            {Menus.map((el) => (
              <S.MenuLink to={el.path} key={el.name} >
                {el.name}
              </S.MenuLink>
            ))}
          </S.MenuList>
        </S.TitleSection>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default Header;
