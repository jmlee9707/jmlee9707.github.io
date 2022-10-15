import React from "react";
import "./ProjectCard.scss";
import mattro from "../../assets/images/projects/mattro_page.png";
import mattroLogo from "../../assets/images/projects/mattro_logo.png";

function ProjectCard() {
  return (
    <div className="card flex">
      <div className="card_left">
        <img src={mattro} alt="mattro" />
      </div>
      <div className="card_right">
        <div className="card_right_title notoBold align-center flex fs-32">
          <div className="card_right_title_logo">
            <img src={mattroLogo} alt="logo" />
          </div>
          <span>맛트로 : Mattro</span>
        </div>
        <div className="card_right_explain notoReg fs-16">
          <p>리뷰데이터와 상권 및 지하철 공공데이터를 활용하여</p>
          <p>
            <span className="notoMid" style={{ color: "#e53060" }}>
              사용자가 선택한 노선/역의 주변 맛집을 추천
            </span>
            해주는 웹 서비스입니다.
          </p>
          <p>사용자 답변을 토대로 취향에 맞는 맛집 추천 페이지 개발</p>
          <p>메인페이지, 공통 컴포넌트 개발</p>
        </div>
        <div className="card_right_skills notoMid fs-14">
          <span className="notoBold" style={{ color: "#e53060" }}>
            Skills :{" "}
          </span>
          <span>next.js</span>
          <span>typescript</span>
          <span>scss</span>
        </div>
        <div className="card_right_period notoMid fs-14">
          <span className="notoBold" style={{ color: "#e53060" }}>
            Period :{" "}
          </span>
          <span>2022.08.22 ~ 2022.10.05 </span>
        </div>
        <div className="card_right_btn notoMid ">
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #e53060" }}
            onClick={() => window.open("https://github.com/jmlee9707/Mattro")}
          >
            깃허브 바로가기
          </button>
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #e53060" }}
            onClick={() =>
              window.open(
                "https://scratch-octopus-16f.notion.site/mattro-4fdb0d9315104ee5a9d88d864a3b8e09"
              )
            }
          >
            더 자세히 보러가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
