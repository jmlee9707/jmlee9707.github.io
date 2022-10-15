import React from "react";
import "./Education.scss";
import icon from "../assets/images/folder.png";

function Education() {
  return (
    <div className="edu flex align-center column">
      <div className="edu_container flex column">
        <div className="edu_container_icon">
          <img src={icon} alt="icon" importance="high" />
        </div>
        <div className="edu_container_box">
          <p className="edu_container_box_main fs-40 notoBold">Education</p>
          <div className="edu_container_box_school notoBold">
            <div className="edu_container_box_school_txt flex ">
              <div className="edu_container_box_school_txt_left">
                <p className="fs-28 notoMid">숭실대학교</p>
                <p className="fs-20 notoMid">2017.03 ~ 2022.02</p>
              </div>
              <div className="edu_container_box_school_txt_right notoMid fs-16">
                <p>IT대학 글로벌미디어학부 전공</p>
                <p>- 디자인, 기획, 개발 수업</p>
                <p>- 학점 3.25 / 4.5</p>
              </div>
            </div>
          </div>
          <div className="edu_container_box_school notoBold">
            <div className="edu_container_box_learn_txt flex ">
              <div className="edu_container_box_learn_txt_left">
                <p className="fs-28 notoMid">삼성 청년 SW 아카데미</p>
                <p className="fs-20 notoMid">2022.01 ~ 2022.12(수료 예정)</p>
              </div>
              <div className="edu_container_box_learn_txt_right notoMid fs-16">
                <p>SSAFY 7기 교육 이수 중</p>
                <p>
                  - 과학 기술 정보 통신부에서 주관하는 SW개발자 양성 교육 과정
                </p>
                <p>- 웹 개발 중심 자기 주도형 풀스택 과정</p>
                <p>- 페어 프로그래밍, 팀 프로젝트를 통한 협업 경험</p>
                <p>- React.js, Spring boot, Java 외 다수</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
