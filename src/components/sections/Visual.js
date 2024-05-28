import { Link } from "react-router-dom";
import Container from "../common/Container";

const Visual = (props) => {
  return (
    <section className="visual">
      <div className="visual__wrap">
        <img src="https://www.kia.com/content/dam/kwp/kr/ko/main-kv-contents/202405/kv_the_kia_ev3_240527_pc.jpg" alt="" />
        <Container>
          <div className="visual__text">
            <p>전동화로 향하는 글로벌 전환을 위한 또 하나의 대담한 발걸음</p>
            <h2>The Kia Ev3</h2>
            <Link to="#">더 보기</Link>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Visual;