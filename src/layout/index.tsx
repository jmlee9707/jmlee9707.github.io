
import './style.css';
import * as S from "./styled";
import GlobalStyle from '@/src/styles/globalStyle';

import { ThemeProvider } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { darkTheme, lightTheme } from '../styles/const';
import { useContext } from 'react';

import Header from '../components/header';


type LayoutProps = {
  location: Location;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  // const theme = useContext(ThemeManagerContext);

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

      <ThemeProvider theme = {lightTheme}>
        <GlobalStyle/>
        <S.Wrapper>
          <Header title = {title} location={location}/>
          <S.Content>
            {children}
          </S.Content>
        </S.Wrapper>
      </ThemeProvider>

  );
};

export default Layout;
