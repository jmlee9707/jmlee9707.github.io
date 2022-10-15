import React from "react";
import "./ProjectCard.scss";
import house from "../../assets/images/projects/house_page.png";
import houseLogo from "../../assets/images/projects/house_logo.png";

function ProjectCard() {
  return (
    <div className="card flex">
      <div className="card_left">
        <img src={house} alt="mattro" />
      </div>
      <div className="card_right">
        <div className="card_right_title notoBold align-center flex fs-32">
          <div className="card_right_title_logo">
            <img src={houseLogo} alt="logo" />
          </div>
          <span>해피하우스</span>
        </div>
        <div className="card_right_explain notoReg fs-16">
          <p>공공데이터와 카카오맵 API를 활용하여</p>
          <p>
            <span className="notoMid" style={{ color: "#f6a11e" }}>
              서울시 아파트 실거래가(보증금액, 월세, 면적, 거래일자) 정보와
              서울시 학군정보를 제공
            </span>
            하는 웹 서비스입니다.
          </p>
          <p>게시판 CRUD 개발</p>
          <p>전체 프론트 개발, 뉴스 크롤링 개발</p>
        </div>
        <div className="card_right_skills notoMid fs-14">
          <span className="notoBold" style={{ color: "#f6a11e" }}>
            Skills :{" "}
          </span>
          <span>vue.js</span>
          <span>javascript</span>
          <span>vuex</span>
        </div>
        <div className="card_right_period notoMid fs-14">
          <span className="notoBold" style={{ color: "#f6a11e" }}>
            Period :{" "}
          </span>
          <span>2022.05.11 ~ 2022.05.24 </span>
        </div>
        <div className="card_right_btn notoMid ">
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #f6a11e" }}
            onClick={() =>
              window.open("https://github.com/jmlee9707/happyhouse")
            }
          >
            깃허브 바로가기
          </button>
          <button
            type="button"
            className="fs-18"
            style={{ border: "2px solid #f6a11e" }}
            onClick={() =>
              window.open(
                "https://scratch-octopus-16f.notion.site/Happyhouse-9988e8806b7c4a9ba61c84a91843e48a"
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
