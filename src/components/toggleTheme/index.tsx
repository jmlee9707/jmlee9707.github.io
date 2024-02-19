import * as S from './styled';

import { ThemeManagerContext } from 'gatsby-emotion-dark-mode';
import { useContext } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const ToggleTheme = () => {
  const theme = useContext(ThemeManagerContext);
  const handleChangeTheme = () => {
    theme.toggleDark();
  };

  return (
      <S.ToggleWrapper onClick={handleChangeTheme} $isDark={theme.isDark}>
        {theme.isDark ? <MoonIcon className="theme-icon" /> : <SunIcon className="theme-icon" />}
      </S.ToggleWrapper>
  );
};

export default ToggleTheme;
