import * as S from "./styled";

const GITHUB_PAGE = "https://github.com/jmlee9707";

const Footer = () => {
  return (
    <S.Wrapper>
      © 2024<S.LinkPage to={GITHUB_PAGE}>이정민</S.LinkPage> Powered by
      <S.LinkPage to="/">devlee.jeongmin.com</S.LinkPage>
    </S.Wrapper>
  );
};
export default Footer;
