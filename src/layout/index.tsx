
import './style.css';
import * as S from "./styled";
import GlobalStyle from '@/src/styles/globalStyle';

import { ThemeProvider } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { darkTheme, lightTheme } from '../styles/const';
import { useContext } from 'react';

import Header from '../components/header';
import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';


type LayoutProps = {
  location?: Location;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useContext(ThemeManagerContext);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (

      <ThemeProvider theme = {theme.isDark?darkTheme : lightTheme}>
        <GlobalStyle/>
        <S.Wrapper>
          <Header title = {title}/>
          <S.Content>
            {children}
          </S.Content>
        </S.Wrapper>
      </ThemeProvider>

  );
};

export default Layout;
