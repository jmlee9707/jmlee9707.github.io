import React from "react";
import "./ProjectCard.scss";
import campic from "../../assets/images/projects/campic_page.png";
import campicLogo from "../../assets/images/projects/campic_logo.png";

function ProjectCard() {
  return (
    <div className="card flex">
      <div className="card_right">
        <div className="card_right_title notoBold align-center flex fs-32">
          <div className="card_right_title_logo">
            <img src={campicLogo} alt="logo" />
          </div>
          <span>캠픽 : Campic</span>
        </div>
        <div className="card_right_explain notoReg fs-16">
          <p>캠핑 일정 관리와 캠핑장 맞춤별 검색 기능을 바탕으로</p>
          <p>
            <span className="notoBold" style={{ color: "#467264" }}>
              간편한 캠핑 계획 설정과 다른 사용자 간의 소통
            </span>
            이 가능한 웹 서비스입니다.
          </p>
          <p>태그, 지역별 캠핑장 검색 및 상세 정보 페이지 개발</p>
          <p>메인페이지, 계획하기 페이지 개발</p>
        </div>
        <div className="card_right_skills notoMid fs-14">
          <span className="notoBold" style={{ color: "#467264" }}>
            Skills :
          </span>
          <span>react.js</span>
          <span>javascript</span>
          <span>redux toolkit</span>
        </div>
        <div className="card_right_period notoMid fs-14">
          <span className="notoBold" style={{ color: "#467264" }}>
            Period :
          </span>
          <span>2022.07.04 ~ 2022.08.19 </span>
        </div>
        <div className="card_right_btn notoMid ">
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #467264" }}
            onClick={() => window.open("https://github.com/jmlee9707/campic")}
          >
            깃허브 바로가기
          </button>
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #467264" }}
            onClick={() =>
              window.open(
                "https://scratch-octopus-16f.notion.site/Campic-572d8990b9a84341a163b0470876a763"
              )
            }
          >
            더 자세히 보러가기
          </button>
        </div>
      </div>
      <div className="card_left">
        <img src={campic} alt="mattro" />
      </div>
    </div>
  );
}

export default ProjectCard;
