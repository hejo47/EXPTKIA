import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__wrap">
          <div className="header__wrap-left">
            <h1 className="header__logo">
              <Link to="/"><img src="https://www.kia.com/etc.clientlibs/kwp-global/clientlibs/clientlib-site/resources/images/common/logo.svg" alt="LOGO" /></Link>
            </h1>
            <div className="header__gnb-wrap">
              <ul className="header__gnb">
                <li className="header__gnb-depth01"><Link to="#">차량</Link></li>
                <li className="header__gnb-depth01">
                  <Link to="#">구매</Link>
                  <ul className="header__gnb-depth02">
                    <li>
                      <Link to="#">견적 내기</Link>
                    </li>
                    <li>
                      <Link to="#">이 달의 구매 혜택</Link>
                    </li>
                    <li>
                      <Link to="#">구매 상담 신청</Link>
                    </li>
                    <li>
                      <Link to="#">Kia Connect Store</Link>
                    </li>
                    <li>
                      <Link to="#">모빌리티</Link>
                      <ul className="header__gnb-depth03">
                        <li><Link to="#">기아 인증 중고차</Link></li>
                        <li><Link to="#">기아 렌터카</Link></li>
                        <li><Link to="#">기아 플렉스</Link></li>
                        <li><Link to="#">위블 비즈</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="header__gnb-depth01">
                  <Link to="#">체험</Link>
                </li>
                <li className="header__gnb-depth01"><Link to="#">이벤트</Link></li>
                <li className="header__gnb-depth01"><Link to="#">고객 지원</Link></li>
                <li className="header__gnb-depth01"><Link to="#">Discover Kia</Link></li>
              </ul>
              <ul className="header__gnb-sub">
                <li><Link to="#">견적 내기</Link></li>
                <li><Link to="#">카탈로그/가격표</Link></li>
                <li><Link to="#">시승 신청</Link></li>
                <li><Link to="#">이 달의 구매 혜택</Link></li>
              </ul>
            </div>
          </div>
          <div className="header__wrap-right">
            <ul className="header__tools">
              <li className="header__tools-item">
                <ul className="header__tools-item-lang">
                  <li><Link to="#">KR</Link></li>
                  <li><Link to="#">EN</Link></li>
                  <li><Link to="#">CN</Link></li>
                </ul>
              </li>
              <li className="header__tools-item-search"><Link to="#">통합검색</Link></li>
              <li className="header__tools-item-login"><Link to="#">로그인</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header;